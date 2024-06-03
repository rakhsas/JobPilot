package com.jobpilot.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.view.RedirectView;

import com.jobpilot.demo.services.UserService;
import com.nimbusds.jose.shaded.gson.JsonObject;
import com.nimbusds.jose.shaded.gson.JsonParser;

import io.swagger.annotations.Api;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController("auth")
@RequestMapping("/v1/auth")
@Api(value = "My Awesome API", description = "This API provides functionalities for...")
public class authController {
    private static final Logger LOGGER = LoggerFactory.getLogger(authController.class);
    private final UserService userService;

    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
    private String clientSecret;

    @Value("${google.redirect.uri}")
    private String redirectUri;

    @Value("${google.token}")
    private String googleToken;

    @Value("${google.user.info}")
    private String googleUserInfo;

    @Value("${linkedin.client-id}")
    private String linkedinClientId;

    @Value("${linkedin.client-secret}")
    private String linkedinClientSecret;

    @Value("${spring.security.oauth2.linkedin.redirect.uri}")
    private String linkedinRedirectUri;

    @Value("${linkedin.token}")
    private String linkedinToken;

    public authController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("oauth2/code")
    public RedirectView getGoogleCode(@RequestParam("code") String code, HttpServletResponse response) {
        String googleAccessToken = getGoogleOauthAccessToken(code);
        JsonObject userProfile = getProfileDetailsGoogle(googleAccessToken);
        String accessToken = this.userService.saveUserFromGoogle(userProfile);
        Cookie cookie = new Cookie("accessToken", accessToken);
        cookie.setHttpOnly(false);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(7 * 24 * 60 * 60); 
        response.addCookie(cookie);

        RedirectView redirectView = new RedirectView();
        System.out.println(accessToken);
        redirectView.setUrl("http://localhost:4200/home");
        return redirectView;
    }

    @GetMapping("oauth2/linkedin/code")
    public RedirectView getLinkedinCode(@RequestParam("code") String code, HttpServletResponse response) {
        String linkedinAccessToken = getLinkedinOauthAccessToken(code);
        JsonObject userProfile = getLinkedinUserInfo(linkedinAccessToken);
        String accessToken = this.userService.saveUserFromLinkedin(userProfile);
        System.out.println(accessToken);
        Cookie cookie = new Cookie("accessToken", accessToken);
        cookie.setHttpOnly(false); // To prevent JavaScript access to the cookie
        cookie.setSecure(false); // To ensure the cookie is sent over HTTPS only
        cookie.setPath("/"); // To make the cookie available to the entire application
        cookie.setMaxAge(7 * 24 * 60 * 60); 
        response.addCookie(cookie);

        RedirectView redirectView = new RedirectView();
        System.out.println(accessToken);
        redirectView.setUrl("http://localhost:4200/home");
        return redirectView;
    }

    @PostMapping("forgot")
    private ResponseEntity<String> forgotPassword(@RequestParam("email") String email) {
        System.out.println(email);
        boolean response = this.userService.forgotPassword(email);
        if (!response) {
            JSONObject jsonObject = new JSONObject();
            jsonObject.appendField("title", "Incorrect Email");
            jsonObject.appendField("description", "Please Re-enter Your Email and verify it");
            return ResponseEntity.badRequest().body(jsonObject.toString());
        }
        return ResponseEntity.ok("email sent");
    }

    @PostMapping("reset")
    private ResponseEntity resetPassword(@RequestParam("email") String email, @RequestParam("resetToken") String resetToken,
            @RequestParam("password") String password) throws Exception {
            try {
                this.userService.resetPassword(email, resetToken, password);
                return new ResponseEntity<>(true, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
    }

    private String getGoogleOauthAccessToken(String code) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("code", code);
        params.add("redirect_uri", redirectUri);
        params.add("client_id", clientId);
        params.add("client_secret", clientSecret);
        params.add("scope", "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid");
        params.add("grant_type", "authorization_code");

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, httpHeaders);
        ResponseEntity<String> response = restTemplate.postForEntity(googleToken, requestEntity, String.class);
        JsonObject jsonObject = JsonParser.parseString(response.getBody()).getAsJsonObject();
        return jsonObject.get("access_token").getAsString();
    }

    private String getLinkedinOauthAccessToken(String code) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("code", code);
        params.add("redirect_uri", linkedinRedirectUri);
        params.add("client_id", linkedinClientId);
        params.add("client_secret", linkedinClientSecret);
        params.add("grant_type", "authorization_code");
        params.add("scope", "profile%20email%20openid");

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, httpHeaders);
        ResponseEntity<String> response = restTemplate.postForEntity(linkedinToken, requestEntity, String.class);
        JsonObject jsonObject = JsonParser.parseString(response.getBody()).getAsJsonObject();
        return jsonObject.get("access_token").getAsString();
    }

    private JsonObject getProfileDetailsGoogle(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setBearerAuth(accessToken);

        HttpEntity<String> requestEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(googleUserInfo, HttpMethod.GET, requestEntity, String.class);
        return JsonParser.parseString(response.getBody()).getAsJsonObject();
    }
    private JsonObject getLinkedinUserInfo(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setBearerAuth(accessToken);

        HttpEntity<String> requestEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange("https://api.linkedin.com/v2/userinfo ", HttpMethod.GET, requestEntity, String.class);
        return JsonParser.parseString(response.getBody()).getAsJsonObject();
    }
}

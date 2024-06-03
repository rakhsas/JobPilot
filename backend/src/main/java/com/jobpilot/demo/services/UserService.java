package com.jobpilot.demo.services;

import com.jobpilot.demo.dto.UserDto;
import com.jobpilot.demo.model.User;
import com.jobpilot.demo.repository.UserRepository;
import com.jobpilot.demo.security.JwtTokenUtil;
import com.nimbusds.jose.shaded.gson.JsonObject;

import io.jsonwebtoken.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException.InternalServerError;

import java.util.List;
import java.util.UUID;

import org.apache.coyote.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    private UserRepository userRepository;
    
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }
    
    public String saveUserFromGoogle(JsonObject userProfile) {
        try {
            if (!userExistence(userProfile.get("email").getAsString())) {
                User user = convertToUser(userProfile);
                if (user.get_id() == null) {
                    user.set_id(UUID.randomUUID().toString());
                }
                return this.saveUser(user);
            }
            else {
                return JwtTokenUtil.generateToken(userProfile.get("email").getAsString());
            }
        } catch (Exception e) {
            System.out.println("Error in saveUserFromGoogle" + e.getMessage());
            // throw InternalServerError
        }
        return null;
    }

    public String saveUserFromLinkedin(JsonObject userProfile) {
        try {
            if (!userExistence(userProfile.get("email").getAsString())) {
                User user = convertToUser(userProfile);
                if (user.get_id() == null) {
                    user.set_id(UUID.randomUUID().toString());
                }
                return this.saveUser(user);
            }
            else {
                return JwtTokenUtil.generateToken(userProfile.get("email").getAsString());
            }
        } catch (Exception e) {
            System.out.println("Error in saveUserFromLinkedin" + e.getMessage());
            // throw InternalServerError
        }
        return null;
    }

    public String saveUser(User user) {
        try {
            this.userRepository.save(user);
            return JwtTokenUtil.generateToken(user.getEmail());
        } catch (Exception e) {
            System.out.println("Error in userRepository");
        }
        return null;
    }
        
    public User getUserByEmail(String email) {
        return this.userRepository.findByEmail(email).orElse(null);
    }
    public boolean userExistence(String email) {
        return this.getUserByEmail(email) != null ? true : false;
    }

    public User convertToUser(JsonObject userProfile) {
        User user = new User();
        if (userProfile.has("email")) {
            user.setEmail(userProfile.get("email").getAsString());
        }
        if (userProfile.has("name")) {
            user.setFullName(userProfile.get("name").getAsString());
        }
        if (userProfile.has("given_name")) {
            user.setGivenName(userProfile.get("given_name").getAsString());
        }
        if (userProfile.has("family_name")) {
            user.setLastName(userProfile.get("family_name").getAsString());
        }
        if (userProfile.has("picture")) {
            user.setPicture(userProfile.get("picture").getAsString());
        }
        user.setPassword(user.getLastName());
        user.setReset_token(null);
        user.setReset_token_expires(null);
        return user;
    }
    public boolean forgotPassword(String email) {
        User user = this.getUserByEmail(email);
        if (user != null) {
            user.setReset_token(UUID.randomUUID().toString());
            user.setReset_token_expires(String.valueOf(System.currentTimeMillis() + 3600 * 1000));
            this.userRepository.save(user);
            System.out.println(user);
            return true;
            // return this.sendMail(email, user.getReset_token());
        }
        return false;
    }

    public boolean resetPassword(String email, String resetToken, String password) throws BadRequestException {
        User user = this.getUserByEmail(email);
        if (user == null) {
            throw new BadRequestException("User not found");
        }
        if (user.getReset_token_expires() == null || user.getReset_token_expires().isEmpty()) {
            throw new BadRequestException("Make sure you have requested for reset password");
        }
        if (user.getReset_token() == null || user.getReset_token().isEmpty()) {
            throw new BadRequestException("Make sure you have requested for reset password");
        }
        if (!user.getReset_token().equals(resetToken)) {
            throw new BadRequestException("Invalid reset token");
        }
        if (System.currentTimeMillis() > Long.parseLong(user.getReset_token_expires())) {
            user.setReset_token(null);
            user.setReset_token_expires(null);
            this.userRepository.save(user);
            throw new BadRequestException("Reset token expired");
        }
        user.setPassword(password);
        user.setReset_token(null);
        user.setReset_token_expires(null);
        this.userRepository.save(user);
        return true;
    }
    

    public boolean sendMail(String email, String resetToken) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(email);
            message.setSubject("Reset Password");
            message.setText("Click on the link to reset your password: http://localhost:4200/auth/verify" + resetToken);
            javaMailSender.send(message);
            System.out.println("Reset token: ");
            System.out.println("Mail Sent Successfully");
            return true;
        } catch (Exception e) {
            System.out.println("Error in sending mail: " + e.getMessage());
            return false;
        }

    }
}

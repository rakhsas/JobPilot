package com.jobpilot.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.jobpilot.demo.services.CustomUserDetailsService;

import jakarta.servlet.Filter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    private static final String[] SWAGGER_WHITELISTS = {
            "/swagger-ui/**",
            // "/v3/api-docs/**",
            // "/v1/user/**",
            "/v1/auth/**",
            "*"
    };

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable);
        http.cors().configurationSource(request -> {
            var cors = new org.springframework.web.cors.CorsConfiguration();
            cors.setAllowedOrigins(java.util.List.of("http://localhost:4200"));
            cors.setAllowedMethods(java.util.List.of("GET", "POST", "PUT", "DELETE"));
            cors.setAllowedHeaders(java.util.List.of("*"));
            return cors;
        });
        http
            .authorizeHttpRequests(
                request -> {
                    request.requestMatchers(SWAGGER_WHITELISTS).permitAll();
                    request.anyRequest().authenticated();
                }
            )
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        
        http.addFilterBefore((Filter) jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
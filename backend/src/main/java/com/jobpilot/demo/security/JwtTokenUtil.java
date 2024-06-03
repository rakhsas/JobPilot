package com.jobpilot.demo.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.jobpilot.demo.config.JwtConfig;

@Component
public class JwtTokenUtil {

    private static JwtConfig jwtConfig;
    // private static final long EXPIRATION_TIME = 86400000; // 1 day in milliseconds
    public JwtTokenUtil(JwtConfig jwtConfig) {
        this.jwtConfig = jwtConfig;
    }

    private static Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtConfig.getSecretKey());
        return Keys.hmacShaKeyFor(keyBytes);
    }    

    public static String generateToken(String email) {
        // Key getSign = getSigningKey();
        return Jwts.builder()
            .setSubject(email)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + jwtConfig.getExpirationTime()))
            .signWith(getSigningKey(), SignatureAlgorithm.HS256)
            .compact();
    }

    public static Claims verifyToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    public String extractUsernameFromToken(String token) {
        return verifyToken(token).getSubject();
    }

    public boolean isTokenExpired(String token) {
        final Date expiration = verifyToken(token).getExpiration();
        return expiration.before(expiration);
    }
}

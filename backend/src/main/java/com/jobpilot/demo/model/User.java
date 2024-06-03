package com.jobpilot.demo.model;

import org.springframework.context.annotation.Primary;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "users")
public class User {
    @Id
    private String _id;

    private String fullName;

    private String givenName;

    private String lastName;
    // @Primary()
    private String email;

    private String picture;

    private String Password;

    @Nullable
    private String reset_token;

    @Nullable
    private String reset_token_expires;
}
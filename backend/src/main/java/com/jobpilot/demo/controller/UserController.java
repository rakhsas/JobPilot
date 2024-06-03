package com.jobpilot.demo.controller;

import com.jobpilot.demo.model.User;
import com.jobpilot.demo.services.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController("User")
@RequestMapping("/v1/user")
@Api(value = "My Awesome API", description = "This API provides functionalities for...")
@Tag(name = "User", description = "User Controller")
public class UserController {
    private final UserService userService;
    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("all")
    @ApiOperation(value = "Get all users", notes = "Returns a list of all users")
    public List<User> getUsers() throws Exception {
        LOGGER.error("retrieving all users");
        return userService.findAll();
    }
}

package com.qa.tracker.business;

import java.util.List;

import com.qa.tracker.business.dto.UserDto;

public interface UserService {
    UserDto getUserById(Integer userId);
    void saveUser(UserDto userDto);
    List<UserDto> getAllUsers();
}

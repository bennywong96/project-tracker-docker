package com.qa.tracker.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.qa.tracker.business.UserService;
import com.qa.tracker.business.dto.UserDto;
import com.qa.tracker.constants.Constants;

@RequestMapping(Constants.USER)
@RestController
public class UserController {
	
	@Autowired
	UserService userService;

	@RequestMapping(Constants.GET_USER_BY_ID)
	public UserDto getUserById(@PathVariable Integer userId) {
		return userService.getUserById(userId);
	}
	
	@RequestMapping(Constants.GET_ALL_USERS)
	public List<UserDto> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping(value= Constants.SAVE_USER, method= RequestMethod.POST)
	public void saveUser(@RequestBody UserDto userDto) {
		userService.saveUser(userDto);
	}
}

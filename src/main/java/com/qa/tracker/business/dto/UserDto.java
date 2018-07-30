package com.qa.tracker.business.dto;

import java.util.ArrayList;
import java.util.List;

public class UserDto {
	
    private Integer userId;
    private String userName;
    private List<SkillDto> skills= new ArrayList<>();

    public UserDto(Integer userId, String userName, List<SkillDto> skills) {
        this.userId = userId;
        this.userName = userName;
        this.skills = skills;
    }

    public UserDto() {
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public List<SkillDto> getSkills() {
        return skills;
    }

    public void setSkills(List<SkillDto> skills) {
        this.skills = skills;
    }
}

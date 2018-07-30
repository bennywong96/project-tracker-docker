package com.qa.tracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.qa.tracker.persistence.UserRepository;
import com.qa.tracker.persistence.domain.Skill;
import com.qa.tracker.persistence.domain.User;
import javax.annotation.PostConstruct;
import java.util.Arrays;

@SpringBootApplication
public class App {
	
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

	@PostConstruct
	public void setupDbWithData(){
		User user= new User("First User", null);
		user.setSkills(Arrays.asList(new Skill("JavaEE"), new Skill("DB")));
		user= userRepository.save(user);
	}
}

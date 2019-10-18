package com.barath.app;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
@RestController
public class Application {
	
	private final UserService userService;	


	public Application(UserService userService) {
		super();
		this.userService = userService;
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	@GetMapping("/users")
	public List<User> users(){		
		
		return this.userService.getUsers();
	}
	
  @EnableSwagger2
  @Configuration
  protected static class SwaggerConfiguration {
		
	  @Bean
	    public Docket api() { 
	        return new Docket(DocumentationType.SWAGGER_2)  
	          .select()                                  
	          .apis(RequestHandlerSelectors.any())              
	          .paths(PathSelectors.any())                          
	          .build();                                           
	    }
  }
}

@Service
class UserService {
	
	private Map<Long,User> users = new HashMap<>();
	
	public List<User> getUsers(){
		return this.users.entrySet().stream().map(Entry::getValue).collect(Collectors.toList());
	}
	
	@PostConstruct
	public void init() {
		
		IntStream.range(0, 10)
		  .mapToObj( i -> {
			  return new User(Long.valueOf(i), "barath"+i);
		  }).forEach( user -> {
			  this.users.put(user.getUserId(), user);
		  });
		
	}
	
}

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
class User {
	
	private Long userId;
	private String userName;
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public User(Long userId, String userName) {
		super();
		this.userId = userId;
		this.userName = userName;
	}
	public User() {
		super();
		
	}
	
	
	
	
}

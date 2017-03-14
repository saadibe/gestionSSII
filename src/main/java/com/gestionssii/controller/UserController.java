package com.gestionssii.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gestionssii.model.User;
import com.gestionssii.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userServices;

	@RequestMapping(value = "/getuser", method = RequestMethod.GET)
	public User getUser(HttpServletRequest request) {
		int userId = Integer.parseInt(request.getParameter("id"));
		return userServices.getUserById(userId);
	}
}

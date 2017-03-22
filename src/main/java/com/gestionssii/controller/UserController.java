package com.gestionssii.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gestionssii.model.User;
import com.gestionssii.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userServices;

	@RequestMapping(value = "/getuser", method = RequestMethod.GET)
	public @ResponseBody User getUserLogin(HttpServletRequest request) {
		String login = request.getParameter("login");
		String password = request.getParameter("password");
		return userServices.getUserLogin(login,password);
	}
}

package com.gestionssii.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.DTO.UserDTO;
import com.gestionssii.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userServices;

	@RequestMapping(value = "/getuser", method = RequestMethod.GET)
	public @ResponseBody UserDTO getUserLogin(HttpServletRequest request) {
		String login = request.getParameter("login");
		String password = request.getParameter("password");
		return userServices.getUserLogin(login, password);
	}
	
	@RequestMapping(value = "/getuser/{userId}", method = RequestMethod.GET)
	public @ResponseBody UserDTO getUserById(HttpServletRequest request, @PathVariable String userId) {
		int userid = Integer.parseInt(userId);
		return userServices.getUserById(userid);
	}
	
	@RequestMapping(value = "/getusers", method = RequestMethod.GET)
	public @ResponseBody List<UserDTO> getusers(HttpServletRequest request) {
		try {
			return userServices.getusers();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/ajoutUser", method = RequestMethod.POST)
	public @ResponseBody String addUser(@RequestBody Map request) {
		Assert.notNull(request);
		boolean isaddUser = false;
		try {
			UserDTO userDto = new UserDTO();
			userDto.setLogin((String) request.get("email"));
			BeanUtils.copyProperties(userDto, request);
			isaddUser = userServices.saveCandidat(userDto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "add user" + isaddUser;
	}
	
	@RequestMapping(value = "/supprimerUser/{userId}", method = RequestMethod.POST)
	public @ResponseBody String deleteUser(HttpServletRequest request, @PathVariable String userId) {
		int userid = Integer.parseInt(userId);
		String message = userServices.deleteUser(userid);
		 return message;
	}
}

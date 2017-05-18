package com.gestionssii.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gestionssii.DTO.NotificationsDTO;

import com.gestionssii.service.NotificationsServices;

@Controller
public class NotificationController {
	
	@Autowired
	NotificationsServices notificationsServices;
	
	@RequestMapping(value = "/getNotifications", method = RequestMethod.GET)
	public @ResponseBody List<NotificationsDTO> getNotifications(HttpServletRequest request) {
		Assert.notNull(request);
		return notificationsServices.getAllNotifications();
	}

}

package com.gestionssii.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gestionssii.DTO.NotificationsDTO;
import com.gestionssii.DTO.UserDTO;
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
	
	@RequestMapping(value = "/ajoutNotification", method = RequestMethod.POST)
	public @ResponseBody String addNotification(@RequestBody Map request) {
		Assert.notNull(request);
		boolean isaddNotification = false;
		try {
			NotificationsDTO notificationsDto = new NotificationsDTO();
			notificationsDto.setIdUser(1);
			notificationsDto.setIdCandidat(Integer.parseInt((String) request.get("idCandidat").toString()));
			isaddNotification = notificationsServices.addNotification(notificationsDto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "add user" + isaddNotification;
	}

}

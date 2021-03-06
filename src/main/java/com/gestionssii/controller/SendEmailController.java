package com.gestionssii.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.gestionssii.service.SendMail;

@Controller
public class SendEmailController {

	@Autowired
	SendMail sendMail;

	@RequestMapping(value = "/sendMail", method = RequestMethod.POST)
	public @ResponseBody String sendEmail(@RequestBody Map request) {
		Assert.notNull(request);
		String email = (String) request.get("email");
		sendMail.sendEmail(email);
		return "E-mail sended";
	}
}

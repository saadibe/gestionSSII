package com.gestionssii.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gestionssii.DTO.ExamsDTO;
import com.gestionssii.service.ExamsService;

@Controller
public class ExamsController {
	
	@Autowired
	private ExamsService examsService;

	@RequestMapping(value = "/getExams", method = RequestMethod.GET)
	public @ResponseBody List<ExamsDTO> getAllExams(HttpServletRequest request) {
		try {
			return examsService.getAllExams();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}

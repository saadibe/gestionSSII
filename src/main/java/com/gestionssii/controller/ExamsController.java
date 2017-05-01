package com.gestionssii.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
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

	@RequestMapping(value = "/getExam/{idExam}", method = RequestMethod.GET)
	public @ResponseBody ExamsDTO getExamById(HttpServletRequest request, @PathVariable String idExam) {
		try {
			int ExamId = Integer.parseInt(idExam);
			return examsService.getExamById(ExamId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}

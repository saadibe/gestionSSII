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
	
	@RequestMapping(value = "/ajoutExam", method = RequestMethod.POST)
	public @ResponseBody String addExam(@RequestBody Map request) {
		Assert.notNull(request);
		boolean isaddExam = false;
		try {
			ExamsDTO examsDTO = new ExamsDTO();
			examsDTO.setName((String)request.get("name"));
			examsDTO.setActive(1);
			examsDTO.setExpertise((String)request.get("expertise"));
			examsDTO.setLevel(1);
			examsDTO.setTime(30);
			examsDTO.setQuestions((List)request.get("question"));
			isaddExam = examsService.addExam(examsDTO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "add Candidiat" + isaddExam;
	}

	@RequestMapping(value = "/afficherExamById/{idExam}", method = RequestMethod.GET)
	public @ResponseBody ExamsDTO getExamById(HttpServletRequest request, @PathVariable String idExam) {
		try {
			int ExamId = Integer.parseInt(idExam);
			return examsService.getExamById(ExamId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/supprimerExam/{idExam}", method = RequestMethod.POST)
	public @ResponseBody String deleteExam(HttpServletRequest request, @PathVariable String idExam)
			throws Exception {
		int ExamId = Integer.parseInt(idExam);
		examsService.deleteExam(ExamId);
		return "examen supprimer";
	}
}

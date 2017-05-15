package com.gestionssii.controller;


import java.util.ArrayList;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONArray;
import org.json.JSONObject;
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
import com.gestionssii.DTO.QuestionDTO;
import com.gestionssii.DTO.ReponseDTO;
import com.gestionssii.service.ExamsService;


@Controller
public class ExamsController<E> {

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
			List<QuestionDTO> questions = new ArrayList<QuestionDTO>();
			examsDTO.setName((String)request.get("name"));
			examsDTO.setActive(1);
			examsDTO.setExpertise((String)request.get("expertise"));
			examsDTO.setLevel(1);
			examsDTO.setTime(30);
			JSONObject jsonResponse = new JSONObject(request.get("question").toString());
			JSONArray questionsArray = jsonResponse.getJSONArray("questions");
			for (int i=0; i<questionsArray.length(); i++) {
				QuestionDTO questionDto = new QuestionDTO();
			    JSONObject question = questionsArray.getJSONObject(i);
			    String description = question.getString("description");	
			    questionDto.setDescription(description);
			    List<ReponseDTO> reponses = new ArrayList<ReponseDTO>();
			    for (int j=0; j<((JSONArray) question.get("reponses")).length(); j++) {
			    	ReponseDTO reponseDto = new ReponseDTO();
			    	JSONObject reponse = ((JSONArray) question.get("reponses")).getJSONObject(j);
			    	reponseDto.setDescription(reponse.getString("description"));
			    	reponses.add(reponseDto);
			    	questionDto.setReponses(reponses);
			    }
			    questions.add(questionDto);
			}
			examsDTO.setQuestions(questions);
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

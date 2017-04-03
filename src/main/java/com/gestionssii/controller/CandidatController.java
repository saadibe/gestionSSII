package com.gestionssii.controller;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.model.Candidat;
import com.gestionssii.service.CandidatService;

@Controller
public class CandidatController {

	@Autowired
	CandidatService candidatService;

	@RequestMapping(value = "/getCandidats", method = RequestMethod.GET)
	public @ResponseBody List<CandidatDTO> getAllCandidats(HttpServletRequest request) throws IllegalAccessException, InvocationTargetException {
		return candidatService.getAllCandidats();
	}

}

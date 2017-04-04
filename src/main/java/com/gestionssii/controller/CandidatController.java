package com.gestionssii.controller;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.service.CandidatService;

@Controller
public class CandidatController {

	@Autowired
	CandidatService candidatService;

	@RequestMapping(value = "/getCandidats", method = RequestMethod.GET)
	public @ResponseBody List<CandidatDTO> getAllCandidats(HttpServletRequest request)
			throws IllegalAccessException, InvocationTargetException {
		return candidatService.getAllCandidats();
	}

	@RequestMapping(value = "/ajoutCandidat", method = RequestMethod.POST)
	public @ResponseBody String addCandidat(HttpServletResponse response, @RequestBody Map request) {
		Assert.notNull(request);
		try {
			candidatService.saveCandidat(request);
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
		return "OK";
	}
}

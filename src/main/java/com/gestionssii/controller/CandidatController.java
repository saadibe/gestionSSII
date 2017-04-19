package com.gestionssii.controller;

import java.lang.reflect.InvocationTargetException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
import com.gestionssii.DTO.CandidatExamsDTO;
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
	public @ResponseBody String addCandidat(@RequestBody Map request) {
		Assert.notNull(request);
		boolean isaddCandidiat = false;
		try {
			CandidatDTO candidatDto = new CandidatDTO();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
			String birthDate = (String) request.get("birthDate");
			String availability = (String) request.get("availability");
			Date birthdate = formatter.parse(birthDate);
			Date availabilityDate = formatter.parse(availability);

			request.put("birthDate", birthdate);
			request.put("availability", availabilityDate);
			BeanUtils.copyProperties(candidatDto, request);
			candidatDto.setActive(1);
			isaddCandidiat = candidatService.saveCandidat(candidatDto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "add Candidiat" + isaddCandidiat;
	}

	@RequestMapping(value = "/supprimerCandidat/{candidatId}", method = RequestMethod.POST)
	public @ResponseBody String deleteCandidat(HttpServletRequest request, @PathVariable String candidatId)
			throws Exception {
		int idcandidat = Integer.parseInt(candidatId);
		candidatService.deleteCandidat(idcandidat);
		return "candidat supprimer";
	}

	@RequestMapping(value = "/afficherCandidat/{candidatId}", method = RequestMethod.GET)
	public @ResponseBody CandidatDTO getCandidatById(HttpServletRequest request, @PathVariable String candidatId)
			throws Exception {
		int idcandidat = Integer.parseInt(candidatId);
		try {
			candidatService.getCandidatById(idcandidat);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return null;
	}
	@RequestMapping(value = "/afficherCandidatExams/{candidatId}", method = RequestMethod.GET)
	public @ResponseBody CandidatExamsDTO getCandidatExamsById(HttpServletRequest request, @PathVariable String candidatId)
			throws Exception {
		int idcandidat = Integer.parseInt(candidatId);
		try {
			return candidatService.getCandidatExamsById(idcandidat);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return null;
	}
}

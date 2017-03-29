package com.gestionssii.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.dao.CandidatDao;
import com.gestionssii.model.Candidat;

@Service
public class CandidatServiceImpl implements CandidatService {

	@Autowired
	CandidatDao candidatDao;

	@Transactional
	public List<CandidatDTO> getAllCandidats() {
		List<Candidat> candidatList = new ArrayList<Candidat>();
		List<CandidatDTO> candidatDtoList = new ArrayList<CandidatDTO>();
		
		candidatList = candidatDao.getAllCandidats();
		for (Candidat candiat : candidatList){
			CandidatDTO candidatDto = new CandidatDTO();
			candidatDto.setLastName(candiat.getLastName());
			candidatDto.setFirstName(candiat.getFirstName());
			candidatDto.setBirthDate(candiat.getBirthDate());
			candidatDto.setAdresse(candiat.getAdresse());
			candidatDto.setSexe(candiat.getSexe());
			candidatDtoList.add(candidatDto);
		}
		return candidatDtoList;
	}

}

package com.gestionssii.service;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import org.apache.commons.beanutils.BeanUtils;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.DTO.CandidatExamsDTO;
import com.gestionssii.DTO.ExamsDTO;
import com.gestionssii.dao.CandidatDao;
import com.gestionssii.dao.ExamsDao;
import com.gestionssii.model.Candidat;
import com.gestionssii.model.Exams;

@Service
public class CandidatServiceImpl implements CandidatService {

	@Autowired
	CandidatDao candidatDao;
	@Autowired
	ExamsDao examsDao;

	@Transactional
	public List<CandidatDTO> getAllCandidats() throws IllegalAccessException, InvocationTargetException {
		List<Candidat> candidatList = new ArrayList<Candidat>();
		List<CandidatDTO> candidatDtoList = new ArrayList<CandidatDTO>();
		candidatList = candidatDao.getAllCandidats();
		for (Candidat candiat : candidatList) {
			CandidatDTO candidatDto = new CandidatDTO();
			BeanUtils.copyProperties(candidatDto, candiat);
			candidatDtoList.add(candidatDto);
		}
		return candidatDtoList;
	}

	@Transactional
	public boolean saveCandidat(CandidatDTO candidatDto) throws Exception {
		Candidat candidat = new Candidat();
		BeanUtils.copyProperties(candidat,candidatDto);
		candidatDao.saveCandidat(candidat);
		return false;
	}

	@Transactional
	public void deleteCandidat(int idcandidat) throws Exception {
		candidatDao.deleteCandidat(idcandidat);
		
	}

	@Transactional
	public CandidatDTO getCandidatById(int idcandidat) throws Exception {
		CandidatDTO candidatDTO = new CandidatDTO();
		Candidat candidat = candidatDao.getCandidatById(idcandidat);
		BeanUtils.copyProperties(candidatDTO,candidat);
		return candidatDTO;
	}
	@Transactional
	public CandidatExamsDTO getCandidatExamsById(int idcandidat) throws Exception {
		CandidatDTO candidatDTO = new CandidatDTO();
		List<ExamsDTO> examsDTO = new ArrayList<ExamsDTO>();
		
		Candidat candidat = candidatDao.getCandidatById(idcandidat);
		BeanUtils.copyProperties(candidatDTO,candidat);
		
		List<Exams> exams = examsDao.getAllExams();
		for(Exams exam : exams){
			ExamsDTO examDto = new ExamsDTO();
			exam.setQuestions(null);
			BeanUtils.copyProperties(examDto,exam);
			examsDTO.add(examDto);
		}
		CandidatExamsDTO candidatExamsDTO  = new CandidatExamsDTO();
		candidatExamsDTO.setCandidat(candidatDTO);
		candidatExamsDTO.setExams(examsDTO);
		return candidatExamsDTO;
	}

}

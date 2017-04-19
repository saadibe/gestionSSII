package com.gestionssii.service;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.DTO.CandidatExamsDTO;
import com.gestionssii.model.Candidat;

public interface CandidatService {
	
	List<CandidatDTO>  getAllCandidats() throws IllegalAccessException, InvocationTargetException;
    boolean saveCandidat(CandidatDTO candidatDto) throws  Exception;
	void deleteCandidat(int idcandidat) throws  Exception;
	CandidatDTO getCandidatById(int idcandidat) throws Exception;
	CandidatExamsDTO getCandidatExamsById(int idcandidat) throws Exception;;
}

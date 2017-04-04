package com.gestionssii.service;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.model.Candidat;

public interface CandidatService {
	
	List<CandidatDTO>  getAllCandidats() throws IllegalAccessException, InvocationTargetException;
    boolean saveCandidat(Map candidat) throws IllegalAccessException, InvocationTargetException;
}

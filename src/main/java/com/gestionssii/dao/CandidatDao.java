package com.gestionssii.dao;

import java.util.List;

import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.model.Candidat;

public interface CandidatDao {
	
	List<Candidat> getAllCandidats();

	void saveCandidat(Candidat candiat);

	void deleteCandidat(int idcandidat);

}

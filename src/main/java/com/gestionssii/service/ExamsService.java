package com.gestionssii.service;

import java.util.List;

import com.gestionssii.DTO.ExamsDTO;

public interface ExamsService {
	
	List<ExamsDTO> getAllExams() throws  Exception;

}

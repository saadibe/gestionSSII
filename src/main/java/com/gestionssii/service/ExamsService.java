package com.gestionssii.service;

import java.util.List;

import com.gestionssii.DTO.ExamsDTO;

public interface ExamsService {

	List<ExamsDTO> getAllExams() throws Exception;
	ExamsDTO getExamById(int idExam) throws Exception;
	boolean addExam(ExamsDTO examsDTO) throws Exception;
	void deleteExam(int examId) throws Exception;
}

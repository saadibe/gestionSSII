package com.gestionssii.DTO;

import java.util.List;

public class CandidatExamsDTO {
	
	private CandidatDTO candidat;
	private List<ExamsDTO> exams;
	
	public CandidatDTO getCandidat() {
		return candidat;
	}
	public List<ExamsDTO> getExams() {
		return exams;
	}
	public void setCandidat(CandidatDTO candidat) {
		this.candidat = candidat;
	}
	public void setExams(List<ExamsDTO> exams) {
		this.exams = exams;
	}
}

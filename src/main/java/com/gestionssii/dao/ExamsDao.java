package com.gestionssii.dao;

import java.util.List;
import com.gestionssii.model.Exams;

public interface ExamsDao {

	List<Exams> getAllExams() throws Exception;

	Exams getExamById(int idExam) throws Exception;

	void addExam(Exams exam)  throws Exception ;

	void deleteExam(Exams exam);

}

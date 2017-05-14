package com.gestionssii.dao;

import java.util.List;
import com.gestionssii.model.Exams;
import com.gestionssii.model.Question;

public interface ExamsDao {

	List<Exams> getAllExams() throws Exception;

	Exams getExamById(int idExam) throws Exception;

	Exams addExam(Exams exam) throws Exception;

	Question addQuestion(Question question, int idExam, int idCategorie) throws Exception;

	void deleteExam(Exams exam);

}

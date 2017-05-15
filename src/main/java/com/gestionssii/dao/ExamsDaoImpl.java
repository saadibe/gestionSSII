package com.gestionssii.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.annotations.Cascade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gestionssii.model.Categorie;
import com.gestionssii.model.Exams;
import com.gestionssii.model.Question;
import com.gestionssii.model.Reponse;

@Repository
public class ExamsDaoImpl implements ExamsDao {

	@Autowired
	private SessionFactory sessionFactory;

	public List<Exams> getAllExams() throws Exception {
		return sessionFactory.getCurrentSession().createQuery("From Exams").list();
	}

	public Exams getExamById(int idExam) throws Exception {

		return (Exams) sessionFactory.getCurrentSession().get(Exams.class, idExam);
	}

	public Exams addExam(Exams exam) throws Exception {
		sessionFactory.getCurrentSession().saveOrUpdate(exam);
		return exam;
	}

	
	public void deleteExam(Exams exam) {
		sessionFactory.getCurrentSession().delete(exam);	
	}


	public Question addQuestion(Question question, int idExam, int idCategorie) throws Exception {
		
		Exams exam =  (Exams) sessionFactory.getCurrentSession().get(Exams.class, idExam);
		Categorie categorie =(Categorie) sessionFactory.getCurrentSession().get(Categorie.class, idCategorie);
		question.setCategorie(categorie);
		question.setExams(exam);
		sessionFactory.getCurrentSession().saveOrUpdate(question);
		return question;
	}

	@Override
	public Reponse addReponse(Reponse reponse, int idQuestion) {
		Question question =  (Question) sessionFactory.getCurrentSession().get(Question.class, idQuestion);
		reponse.setQuestion(question);
		sessionFactory.getCurrentSession().saveOrUpdate(reponse);
		return reponse;
	}
}

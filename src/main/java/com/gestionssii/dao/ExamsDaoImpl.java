package com.gestionssii.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.annotations.Cascade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gestionssii.model.Exams;

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

	public void addExam(Exams exam) throws Exception {
		sessionFactory.getCurrentSession().saveOrUpdate(exam);
	}

	
	public void deleteExam(Exams exam) {
		sessionFactory.getCurrentSession().delete(exam);	
	}
}

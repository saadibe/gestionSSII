package com.gestionssii.dao;

import java.util.List;

import org.hibernate.SessionFactory;
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
}

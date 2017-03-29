package com.gestionssii.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gestionssii.model.Candidat;

@Repository
public class CandidatDaoImpl implements CandidatDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Candidat> getAllCandidats() {
		return sessionFactory.getCurrentSession().createQuery("From Candidat").list();
	}

}

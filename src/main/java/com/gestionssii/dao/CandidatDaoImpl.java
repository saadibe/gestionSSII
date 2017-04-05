package com.gestionssii.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gestionssii.DTO.CandidatDTO;
import com.gestionssii.model.Candidat;

@Repository
public class CandidatDaoImpl implements CandidatDao {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public List<Candidat> getAllCandidats() {
		return sessionFactory.getCurrentSession().createQuery("From Candidat").list();
	}

	@Override
	public void saveCandidat(Candidat candiat) {
		sessionFactory.getCurrentSession().save(candiat);
	}

	@Override
	public void deleteCandidat(int idcandidat) {
		sessionFactory.getCurrentSession()
				.createQuery("update Candidat ca set ca.active = 0 where ca.idCandidats=" + idcandidat).executeUpdate();
	}
}

package com.gestionssii.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gestionssii.model.Notifications;
import com.gestionssii.model.User;

@Repository
public class NotificationsDaoImpl implements NotificationsDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Notifications> getAllNotifications() {
		 return sessionFactory.getCurrentSession().createQuery("From Notifications").list();
	}

}

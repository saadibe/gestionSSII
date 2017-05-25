package com.gestionssii.dao;

import java.util.List;

import com.gestionssii.model.Notifications;

public interface NotificationsDao {
	
	public List<Notifications> getAllNotifications();

	public void saveNotification(Notifications notifications);

}

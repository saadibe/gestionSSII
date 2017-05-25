package com.gestionssii.service;

import java.util.List;

import com.gestionssii.DTO.NotificationsDTO;

public interface NotificationsServices {
	
	public List<NotificationsDTO> getAllNotifications();

	public boolean addNotification(NotificationsDTO notificationsDto);

}

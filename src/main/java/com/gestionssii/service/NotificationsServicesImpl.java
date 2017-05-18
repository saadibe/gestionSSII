package com.gestionssii.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.DTO.NotificationsDTO;
import com.gestionssii.dao.CandidatDao;
import com.gestionssii.dao.NotificationsDao;
import com.gestionssii.model.Candidat;
import com.gestionssii.model.Notifications;

@Service
public class NotificationsServicesImpl implements NotificationsServices {
	
	@Autowired
	private NotificationsDao notificationsDao;
	
	@Autowired
	CandidatDao candidatDao;
	
	@Transactional
	public List<NotificationsDTO> getAllNotifications() {
		List<Notifications> notifications= notificationsDao.getAllNotifications();
		List<NotificationsDTO> notificationsDTO= new ArrayList<NotificationsDTO>();
		for(Notifications notification : notifications ){
			NotificationsDTO notificationDTO = new NotificationsDTO();
			Candidat candidat = candidatDao.getCandidatById(notification.getIdCandidat());
			notificationDTO.setMessage(candidat.getLastName() +" "+candidat.getFirstName() + " a passer l'examen ");
			notificationsDTO.add(notificationDTO);
		}
		return notificationsDTO;
	}

}

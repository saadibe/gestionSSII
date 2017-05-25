package com.gestionssii.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.DTO.NotificationsDTO;
import com.gestionssii.dao.CandidatDao;
import com.gestionssii.dao.NotificationsDao;
import com.gestionssii.model.Candidat;
import com.gestionssii.model.Notifications;
import com.gestionssii.model.User;

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
			if(null != candidat){
				notificationDTO.setMessage(candidat.getLastName() +" "+candidat.getFirstName() + " a passer l'examen ");
				notificationsDTO.add(notificationDTO);
			}
		}
		return notificationsDTO;
	}

	@Transactional
	public boolean addNotification(NotificationsDTO notificationsDto) {
		Notifications notifications = new Notifications();
		notifications.setIdCandidat(notificationsDto.getIdCandidat());
		notifications.setIdUser(notificationsDto.getIdUser());
		notificationsDao.saveNotification(notifications);
		return false;
	}
}

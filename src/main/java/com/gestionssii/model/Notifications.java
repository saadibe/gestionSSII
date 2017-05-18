package com.gestionssii.model;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "notification", catalog = "gestion_ssii")
public class Notifications {
	
	private int idNotification;
	private int  idUser;
	private int idCandidat;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "idNotification", unique = true, nullable = false)
	public int getIdNotification() {
		return idNotification;
	}
	
	@Column(name = "idUser")
	public int getIdUser() {
		return idUser;
	}
	@Column(name = "idCandidat")
	public int getIdCandidat() {
		return idCandidat;
	}
	
	public void setIdNotification(int idNotification) {
		this.idNotification = idNotification;
	}
	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}
	public void setIdCandidat(int idCandidat) {
		this.idCandidat = idCandidat;
	}

}

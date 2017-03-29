package com.gestionssii.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "candidats")
public class Candidat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idCandidats;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private String sexe;
	@Column
	private Date birthDate;
	@Column
	private String adresse;
	@Column
	private String expertise;
	@Column
	private String experience;
	@Column
	private String cv;
	@Column
	private Date availability;
	@Column
	private Date createDate;
	@Column
	private Date updateDate;
	@Column
	private int active;

	public int getIdCandidats() {
		return idCandidats;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getSexe() {
		return sexe;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public String getAdresse() {
		return adresse;
	}

	public String getExpertise() {
		return expertise;
	}

	public String getExperience() {
		return experience;
	}

	public String getCv() {
		return cv;
	}

	public Date getAvailability() {
		return availability;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public Date getUpdateDate() {
		return updateDate;
	}

	public int getActive() {
		return active;
	}

	public void setIdCandidats(int idCandidats) {
		this.idCandidats = idCandidats;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public void setExpertise(String expertise) {
		this.expertise = expertise;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public void setCv(String cv) {
		this.cv = cv;
	}

	public void setAvailability(Date availability) {
		this.availability = availability;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	public void setActive(int active) {
		this.active = active;
	}
}

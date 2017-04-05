package com.gestionssii.DTO;

import java.util.Date;

public class CandidatDTO {

	private int idCandidats;
	private String firstName;
	private String lastName;
	private String sexe;
	private Date birthDate;
	private String adresse;
	private String email;
	private String expertise;
	private String experience;
	private String cv;
	private Date availability;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setAvailability(Date availability) {
		this.availability = availability;
	}
	public void setActive(int active) {
		this.active = active;
	}

}

package com.gestionssii.service;

public interface SendMail {

	public void sendEmail(String to, String object, String message, String idExams, String idCandidat);

}

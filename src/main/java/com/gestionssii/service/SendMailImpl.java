package com.gestionssii.service;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

@Service
public class SendMailImpl implements SendMail {

	public void sendEmail(String to) {
		final String username = "linaservicesfr";
		final String password = "bithainfo";

		String port = "587";
		Properties props = new Properties();
		props.setProperty("mail.smtp.starttls.enable", "true");
		props.setProperty("mail.transport.protocol", "smtp");
		props.setProperty("mail.smtp.port", port);
		props.setProperty("mail.host", "smtp.gmail.com");
		props.setProperty("mail.user", username);
		props.setProperty("mail.password", password);
		props.setProperty("mail.smtp.auth", "true");

		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		});

		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("linaservicesfr@gmail.com"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
			message.setSubject("test Examen de compitence  !!!");
			message.setText("test Examen de compitence!");

			Transport.send(message);

			System.out.println("Done");

		}

		catch (MessagingException e) {
			// throw new RuntimeException(e);
			System.out.println("Username or Password are incorrect ... exiting !" + e);
		}
	}
}
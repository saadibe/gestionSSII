package com.gestionssii.service;

import com.gestionssii.model.User;

public interface UserService {

	public User getUserById(int userId);

	public User getUserLogin(String login, String password);

}

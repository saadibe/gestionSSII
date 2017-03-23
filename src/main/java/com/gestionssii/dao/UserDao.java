package com.gestionssii.dao;

import com.gestionssii.model.User;

public interface UserDao {

	public User getUserById(int userId);

	public User getUserLogin(String login, String password);

}

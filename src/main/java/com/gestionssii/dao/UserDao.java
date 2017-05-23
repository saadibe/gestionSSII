package com.gestionssii.dao;

import java.util.List;

import com.gestionssii.model.User;

public interface UserDao {

	public User getUserById(int userId);

	public User getUserLogin(String login, String password);

	public List<User> getusers();

	public void saveCandidat(User user);

	public String deleteUser(int userid);

}

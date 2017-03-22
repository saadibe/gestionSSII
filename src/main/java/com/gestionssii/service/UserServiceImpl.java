package com.gestionssii.service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.dao.UserDao;
import com.gestionssii.model.User;
import com.gestionssii.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userdao;

	@Transactional
	public User getUserById(int userId) {
		return userdao.getUserById(userId);
	}

	@Transactional
	public User getUserLogin(String login, String password) {
		
		return userdao.getUserLogin(login,password);
	}

}

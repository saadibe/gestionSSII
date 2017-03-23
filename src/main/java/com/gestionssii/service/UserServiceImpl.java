package com.gestionssii.service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.DTO.UserDTO;
import com.gestionssii.dao.UserDao;
import com.gestionssii.model.User;
import com.gestionssii.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userdao;

	@Transactional
	public UserDTO getUserById(int userId) {
		return new UserDTO();
	}

	@Transactional
	public UserDTO getUserLogin(String login, String password) {
		UserDTO userdto = new UserDTO();
		User user = userdao.getUserLogin(login, password);
		if (user != null) {
			userdto.setFirstName(user.getFirstName());
			userdto.setLastName(user.getLastName());
			userdto.setUserId(user.getUserId());
		}
		return userdto;
	}
}

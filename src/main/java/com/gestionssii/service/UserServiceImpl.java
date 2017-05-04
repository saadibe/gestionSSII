package com.gestionssii.service;

import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.DTO.UserDTO;
import com.gestionssii.dao.UserDao;
import com.gestionssii.model.Candidat;
import com.gestionssii.model.User;
import com.gestionssii.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userdao;

	@Transactional
	public UserDTO getUserById(int userId) {
		UserDTO userdto = new UserDTO();
		User user = userdao.getUserById(userId);
		userdto.setEmail(user.getEmail());
		userdto.setFirstName(user.getFirstName());
		userdto.setLastName(user.getLastName());
		userdto.setProfile(user.getProfile());
		userdto.setUserId(user.getUserId());
		return userdto;
	}

	@Transactional
	public UserDTO getUserLogin(String login, String password) {
		UserDTO userdto = new UserDTO();
		User user = userdao.getUserLogin(login, password);
		if (user != null) {
			userdto.setUserId(user.getUserId());
		}
		return userdto;
	}

	@Transactional
	public List<UserDTO> getusers() throws Exception {
		List<User> userList = new ArrayList<User>();
		List<UserDTO> userDtoList = new ArrayList<UserDTO>();
			userList = userdao.getusers();
			for (User user : userList) {
				UserDTO userDto = new UserDTO();
				BeanUtils.copyProperties(userDto, user);
				userDtoList.add(userDto);
			}
		return userDtoList;
	}

	@Transactional
	public boolean saveCandidat(UserDTO userDto) throws Exception {
		User user = new User();
		BeanUtils.copyProperties(user,userDto);
		userdao.saveCandidat(user);
		return false;
	}
}

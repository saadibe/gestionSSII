package com.gestionssii.service;

import com.gestionssii.DTO.UserDTO;
import com.gestionssii.model.User;

public interface UserService {

	public UserDTO getUserById(int userId);

	public UserDTO getUserLogin(String login, String password);

}

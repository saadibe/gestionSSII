package com.gestionssii.service;

import java.util.List;

import com.gestionssii.DTO.UserDTO;
import com.gestionssii.model.User;

public interface UserService {

	public UserDTO getUserById(int userId);

	public UserDTO getUserLogin(String login, String password);

	public List<UserDTO> getusers() throws Exception;

	public boolean saveCandidat(UserDTO userDto) throws Exception;

}

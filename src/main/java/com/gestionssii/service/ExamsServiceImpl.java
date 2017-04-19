package com.gestionssii.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.DTO.ExamsDTO;
import com.gestionssii.dao.ExamsDao;
import com.gestionssii.model.Exams;

@Service
public class ExamsServiceImpl implements ExamsService {

	@Autowired
	private ExamsDao examDao;

	@Transactional
	public List<ExamsDTO> getAllExams() throws Exception {
		List<ExamsDTO> examsDto = new ArrayList<ExamsDTO>();
		List<Exams> exams = examDao.getAllExams();
		for(Exams exam : exams ){
			ExamsDTO examDto = new ExamsDTO();
			BeanUtils.copyProperties(examDto, exam);
			examsDto.add(examDto);
		}
		return examsDto;
	}
}

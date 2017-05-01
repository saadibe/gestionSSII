package com.gestionssii.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.DTO.ExamsDTO;
import com.gestionssii.DTO.QuestionDTO;
import com.gestionssii.DTO.ReponseDTO;
import com.gestionssii.dao.ExamsDao;
import com.gestionssii.model.Exams;
import com.gestionssii.model.Question;
import com.gestionssii.model.Reponse;

@Service
public class ExamsServiceImpl implements ExamsService {

	@Autowired
	private ExamsDao examDao;

	@Transactional
	public ExamsDTO getExamById(int idExam) throws Exception {

		Exams exam = examDao.getExamById(idExam);
		ExamsDTO examDto = new ExamsDTO();
		examDto.setActive(exam.getActive());
		examDto.setExpertise(exam.getExpertise());
		examDto.setIdExams(exam.getIdExams());
		examDto.setLevel(exam.getLevel());
		examDto.setName(exam.getName());
		examDto.setTime(exam.getTime());
		List<QuestionDTO> questionsDTO = new ArrayList<QuestionDTO>();
		for (Question question : exam.getQuestions()) {
			QuestionDTO questiondto = new QuestionDTO();
			questiondto.setDescription(question.getDescription());
			questiondto.setIdQuestion(question.getIdQuestion());
			List<ReponseDTO> reponsesDTO = new ArrayList<ReponseDTO>();
			for (Reponse reponse : question.getReponses()) {
				ReponseDTO reponsedto = new ReponseDTO();
				reponsedto.setDescription(reponse.getDescription());
				reponsedto.setIdReponse(reponse.getIdReponse());
				reponsedto.setIsGoodreponse(reponse.getIsGoodreponse());
				reponsesDTO.add(reponsedto);
			}
			questiondto.setReponses(reponsesDTO);
			questionsDTO.add(questiondto);
			examDto.setQuestions(questionsDTO);
		}
		return examDto;
	}

	@Transactional
	public List<ExamsDTO> getAllExams() throws Exception {
		List<ExamsDTO> examsDto = new ArrayList<ExamsDTO>();
		List<Exams> exams = examDao.getAllExams();
		for (Exams exam : exams) {
			ExamsDTO examDto = new ExamsDTO();
			examDto.setActive(exam.getActive());
			examDto.setExpertise(exam.getExpertise());
			examDto.setIdExams(exam.getIdExams());
			examDto.setLevel(exam.getLevel());
			examDto.setName(exam.getName());
			examDto.setTime(exam.getTime());
			examsDto.add(examDto);
		}
		return examsDto;
	}
}

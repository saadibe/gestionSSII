package com.gestionssii.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionssii.DTO.CategorieDTO;
import com.gestionssii.DTO.ExamsDTO;
import com.gestionssii.DTO.QuestionDTO;
import com.gestionssii.DTO.ReponseDTO;
import com.gestionssii.dao.ExamsDao;
import com.gestionssii.model.Categorie;
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
				if (reponse.getIsGoodreponse() == 1) {
					reponsedto.setIsGoodreponse(true);
				} else {
					reponsedto.setIsGoodreponse(false);
				}

				reponsesDTO.add(reponsedto);
			}
			questiondto.setReponses(reponsesDTO);
			CategorieDTO categorieDTO = new CategorieDTO();
			categorieDTO.setDescription(question.getCategorie().getDescription());
			questiondto.setCategorie(categorieDTO);
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

	@Transactional
	public boolean addExam(ExamsDTO examsDTO) throws Exception {
		Exams exam = new Exams();
		exam.setActive(examsDTO.getActive());
		exam.setExpertise(examsDTO.getExpertise());
		exam.setLevel(examsDTO.getLevel());
		exam.setName(examsDTO.getName());
		exam.setTime(examsDTO.getTime());
		exam = examDao.addExam(exam);
		for(QuestionDTO questionDto : examsDTO.getQuestions()){
			Question question = new Question();			
			question.setDescription(questionDto.getDescription());
			question = examDao.addQuestion(question, exam.getIdExams(),1);
		}
		System.out.println(exam.getIdExams());
		return true;
	}

	@Transactional
	public void deleteExam(int examId) throws Exception {
		Exams exam = examDao.getExamById(examId);
		examDao.deleteExam(exam);

	}
}

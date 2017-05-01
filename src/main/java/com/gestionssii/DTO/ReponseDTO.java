package com.gestionssii.DTO;

public class ReponseDTO {

	private Integer idReponse;
	//private QuestionDTO question;
	private String description;
	private Integer isGoodreponse;

	public ReponseDTO() {
	}

	public Integer getIdReponse() {
		return this.idReponse;
	}

	public void setIdReponse(Integer idReponse) {
		this.idReponse = idReponse;
	}


	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getIsGoodreponse() {
		return this.isGoodreponse;
	}

	public void setIsGoodreponse(Integer isGoodreponse) {
		this.isGoodreponse = isGoodreponse;
	}

}

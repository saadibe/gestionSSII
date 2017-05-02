package com.gestionssii.DTO;

public class ReponseDTO {

	private Integer idReponse;
	private String description;
	private boolean isGoodreponse;

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

	public boolean getIsGoodreponse() {
		return this.isGoodreponse;
	}

	public void setIsGoodreponse(boolean isGoodreponse) {
		this.isGoodreponse = isGoodreponse;
	}

}

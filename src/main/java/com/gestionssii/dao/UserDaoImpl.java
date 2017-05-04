package com.gestionssii.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gestionssii.dao.UserDao;
import com.gestionssii.model.User;

@Repository
public class UserDaoImpl implements UserDao {

	@Autowired
	private SessionFactory sessionFactory;

	public User getUserById(int userId) {
		return (User) sessionFactory.getCurrentSession().get(User.class, userId);
	}

	@Override
	public User getUserLogin(String login, String password) {
		String sql = " from User u where u.login=:login and u.password=:password";
		Query query = sessionFactory.getCurrentSession().createQuery(sql);
		query.setParameter("login", login);
		query.setParameter("password", password);
		List<User> list = query.list();
		if (list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

	@Override
	public List<User> getusers() {
		return sessionFactory.getCurrentSession().createQuery("From User").list();
	}

	@Override
	public void saveCandidat(User user) {
		sessionFactory.getCurrentSession().saveOrUpdate(user);
	}
}

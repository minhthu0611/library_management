package com.matcha.nlulibrary.dao;

import com.matcha.nlulibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookDao extends JpaRepository<Book, Integer> {
    List<Book> findAll();
}

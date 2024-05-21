package com.matcha.nlulibrary.service;

import com.matcha.nlulibrary.dao.BookDao;
import com.matcha.nlulibrary.entity.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookDao bookDao;

    public List<Book> getAllBooks() {
        return bookDao.findAll();
    }

    public Book registerBook(Book book) {
        checkInput(book);
        book.setCreatedAt(Timestamp.valueOf(java.time.LocalDateTime.now()));
        return bookDao.save(book);
    }

    public Book updateBook(Book book, Integer id) {
        checkInput(book);
        book.setId(id);
        return bookDao.save(book);
    }

    public void deleteBook(Integer id) {
        bookDao.deleteById(id);
    }

    public Book getBookById(Integer id) {
        return bookDao.findById(id).orElseThrow(() -> new IllegalArgumentException("Book not found"));
    }

    public void checkInput(Book book) {
        List<Book> books = bookDao.findAll();
        for (Book b : books) {
            if (b.getTitle().equals(book.getTitle()) && b.getAuthor().equals(book.getAuthor())) {
                throw new IllegalArgumentException("Book already exists");
            }
        }
        if (book.getTitle() == null || book.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Title cannot be empty");
        }
        if (book.getAuthor() == null || book.getAuthor().isEmpty()) {
            throw new IllegalArgumentException("Author cannot be empty");
        }
    }
}

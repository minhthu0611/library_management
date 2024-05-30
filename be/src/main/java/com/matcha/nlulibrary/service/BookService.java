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

    // 7. Lớp Service gọi tới lớp Dao để tương tác với database
    public Book registerBook(Book book) {
        checkInput(book);
        book.setCreatedAt(Timestamp.valueOf(java.time.LocalDateTime.now()));
        // 8. Lớp Dao lưu dữ liệu từ service gửi xuống vào database
        // 9. Database luu thông tin sách mới
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
        // 6.1 Thông tin trường [Tên sách] và trường [Tác giả] là tên sách của tác giả đã tồn tại trong hệ thống
        for (Book b : books) {
            if (b.getTitle().equals(book.getTitle()) && b.getAuthor().equals(book.getAuthor())) {
                // 6.2 Lớp Service trả về lỗi
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

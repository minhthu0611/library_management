package com.matcha.nlulibrary.controller;

import com.matcha.nlulibrary.entity.Book;
import com.matcha.nlulibrary.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/book")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping
    public ResponseEntity<?> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookById(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(bookService.getBookById(id));
        } catch (IllegalArgumentException e) {
            Map<String, String> response = Map.of("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
    // 6. Lớp Controller nhận yêu cầu và chuyển thông tin đến service để xử lý
    @PostMapping
    public ResponseEntity<?> registerBook(@RequestBody Book book) {
        try {
            return ResponseEntity.ok(bookService.registerBook(book));
        } catch (IllegalArgumentException e) { // 7.3 Lớp Controller bắt lỗi và throw ra lỗi tương ứng
            Map<String, String> response = Map.of("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBook(@RequestBody Book book, @PathVariable Integer id) {
        try {
            return ResponseEntity.ok(bookService.updateBook(book, id));
        } catch (IllegalArgumentException e) {
            Map<String, String> response = Map.of("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Integer id) {
        try {
            bookService.deleteBook(id);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            Map<String, String> response = Map.of("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
}

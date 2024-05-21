import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import BooksCard from './BooksCard'

function BookDetailsList({ isCustomer }) {

    const [isLoading, SetLoading] = useState(true);
    const [BooksList, SetBooksList] = useState([]);

    useEffect(() => {
        //On Load
        getBooks();
    }, [])

    let getBooks = async () => {
        try {
            const Books = await axios.get(`${process.env.REACT_APP_API_URL}/book`)
            SetBooksList(Books.data)
            SetLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    let handleDelete = async (id) => {
        try {
            const confirmDelete = window.confirm("Are you sure do you want to delete this book from the list?");
            if (confirmDelete) {
                await axios.delete(`${process.env.REACT_APP_API_URL}/book/${id}`);
                getBooks();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh sách sách có sẵn</h1>
                {
                    isCustomer ? "" :
                        <Link to="/librarian-portal/add-new-book" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <FontAwesomeIcon icon={faBook} className="creatinguser mr-2" />
                            Thêm sách
                        </Link>
                }
            </div>
            <div className='container'>
                {
                    isLoading ? <img src="https://media.giphy.com/media/9MImS9neQuoRa3D19h/giphy.gif" alt="Loading..." />
                        :
                        <div className='row'>
                            {
                                BooksList.map((book) => {
                                    return (
                                        <div className='col-md-4'>
                                            <div className="card Books-card">
                                                <img src={book.book_image}
                                                    className="card-img-top" alt="..." style={{ maxHeight: "400px" }}
                                                />
                                                <div className="card-body">
                                                    <h4 className="card-title">{book.title}</h4>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Tác giả: <strong>{book.author}</strong>
                                                    </h6>
                                                    <p className="card-text">
                                                        {book.overview}
                                                    </p>
                                                    <div className='genre-name'>
                                                        <b>Thể loại:</b> {book.genre}
                                                    </div>
                                                    <span className='languages-available'>
                                                        <b>Ngôn ngữ:</b> {book.language}
                                                    </span>
                                                    <div className='action'>
                                                        {
                                                            isCustomer ? <Link to={`/customer-portal/book-read/${book.id}`} className="btn btn-primary btn-block m-2">Read</Link>
                                                                :
                                                                <>
                                                                    <Link to={`/librarian-portal/book-view/${book.id}`} className="btn btn-primary m-2">Xem</Link>
                                                                    <Link to={`/librarian-portal/book-edit/${book.id}`} className="btn btn-info m-2">Sửa</Link>
                                                                    <button onClick={() => { handleDelete(book.id) }} className="btn btn-danger m-2">Xóa</button>
                                                                </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        </div>)
                                })
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default BookDetailsList
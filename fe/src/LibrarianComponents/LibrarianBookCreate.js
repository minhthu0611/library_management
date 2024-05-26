import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LibrarianBookCreate() {

    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const myFormik = useFormik({
        initialValues: {
            title: "",
            author: "",
            book_image: "",
            overview: "",
            genre: "",
            language: "",
            description: ""
        },
        validate: ((values) => {
            let errors = {}

            if (!values.title) {
                errors.title = "Enter the title of the Book";
            }

            if (!values.author) {
                errors.author = "Author field can't be empty";
            }

            if (!values.book_image) {
                errors.book_image = "Please enter this field";
            }

            if (!values.overview) {
                errors.overview = "Enter the story overview of the Book";
            } else if (values.overview.length > 300) {
                console.log(values.overview.length);
                errors.overview = "Short description or overview should be less than 300";
            }

            if (!values.genre) {
                errors.genre = "Genre of the book";
            }

            if (!values.language) {
                errors.language = "Please enter how many languages available";
            }

            if (!values.description) {
                errors.description = "This can't be empty";
            }

            return errors;
        }),

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post(`${process.env.REACT_APP_API_URL}/book`, values);
                setLoading(false);
                toast("Thêm sách thành công", {
                    autoClose: 2000
                });
                
                setTimeout(() => navigate("/librarian-portal/librarian-book-list"), 2000)
            } catch (error) {
                toast.error("Sách đã tồn tại trong hệ thống", {
                    autoClose: 2000
                });
                setLoading(false);
            }
        }
    })

    return (
        <>
            <ToastContainer />
            <h3>Thêm sách mới </h3>
            <div className='container mt-4'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Tiêu đề</label>
                            <input name='title' value={myFormik.values.title} onChange={myFormik.handleChange}
                                type={'text'} className={`form-control ${myFormik.errors.title ? "is-invalid" : ""} `} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.title} </span>
                        </div>
                        <div className='col-lg-6'>
                            <label>Tên tác giả</label>
                            <input name='author' value={myFormik.values.author} onChange={myFormik.handleChange}
                                type={'text'} className={`form-control ${myFormik.errors.author ? "is-invalid" : ""} `} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.author} </span>
                        </div>
                        <div className='col-lg-8 mt-2'>
                            <label>Ảnh bìa</label>
                            <input name='book_image' value={myFormik.values.book_image} onChange={myFormik.handleChange}
                                type={'text'} className={`form-control ${myFormik.errors.book_image ? "is-invalid" : ""} `} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.book_image} </span>
                        </div>
                        <div className='col-lg-12 mt-2'>
                            <label>Giới thiệu về sách</label>
                            <textarea name='overview' value={myFormik.values.overview} onChange={myFormik.handleChange}
                                type={'text'} className={`form-control ${myFormik.errors.overview ? "is-invalid" : ""} `} >
                            </textarea>
                            <span style={{ color: "red" }}>{myFormik.errors.overview} </span>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label>Thể loại</label>
                            <input name='genre' value={myFormik.values.genre} onChange={myFormik.handleChange}
                                type={'text'} className={`form-control ${myFormik.errors.genre ? "is-invalid" : ""} `} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.genre} </span>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label>Ngôn ngữ</label>
                            <input name='language' value={myFormik.values.language} onChange={myFormik.handleChange}
                                type={'text'} className={`form-control ${myFormik.errors.language ? "is-invalid" : ""} `} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.language} </span>
                        </div>
                        <div className='col-lg-12 mt-2'>
                            <label>Mô tả chi tiết</label>
                            <textarea name='description' value={myFormik.values.description} onChange={myFormik.handleChange}
                                type='text' className={`form-control ${myFormik.errors.description ? "is-invalid" : ""} `}
                                style={{ height: "150px" }} >
                            </textarea>
                            <span style={{ color: "red" }}>{myFormik.errors.description} </span>
                        </div>
                        <div className='col-lg-4 mt-3'>
                            <input disabled={isLoading} type='submit' value={isLoading ? "Đang thêm..." : "Thêm"} className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LibrarianBookCreate
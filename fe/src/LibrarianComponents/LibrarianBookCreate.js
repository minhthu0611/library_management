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
                errors.title = "Vui lòng nhập tiêu đề sách";
            }

            if (!values.author) {
                errors.author = "Vui lòng nhập tên tác giả";
            }

            if (!values.book_image) {
                errors.book_image = "Vui lòng nhập ảnh bìa sách";
            }

            if (!values.overview) {
                errors.overview = "Vui lòng nhập giới thiệu sách";
            } else if (values.overview.length > 300) {
                console.log(values.overview.length);
                errors.overview = "Giới thiệu sách không được quá 300 ký tự";
            }

            if (!values.genre) {
                errors.genre = "Vui lòng nhập thể loại sách";
            }

            if (!values.language) {
                errors.language = "Vui lòng nhập ngôn ngữ sách";
            }

            if (!values.description) {
                errors.description = "Vui lòng nhập mô tả chi tiết sách";
            }

            return errors;
        }),

        onSubmit: async (values) => {
            try {
                setLoading(true);
                // 5.  Gọi api thêm sách mới vào hệ thống
                await axios.post(`${process.env.REACT_APP_API_URL}/book`, values);
                setLoading(false);
                // 10. Hệ thống hiển thị thông báo thêm sách thành công 
                toast("Thêm sách thành công", {
                    autoClose: 2000
                });
                // 11. Hiển thị  sách vừa được thêm tại trang [Quản lý sách]
                setTimeout(() => navigate("/librarian-portal/librarian-book-list"), 2000)
            } catch (error) {
                // 6.4. Thêm sách không thành công và hiện thông báo lỗi [Sách đã tồn tại trong hệ thống]
                toast.error("Sách đã tồn tại trong hệ thống", {
                    autoClose: 2000
                });
                setLoading(false);
            }
        }
    })

    return (
        // 2.Hệ thống chuyển qua giao diện thêm sách, ở đây có các trường thông tin sách
        <>
            <ToastContainer />
            <h3>Thêm sách mới </h3>
            <div className='container mt-4'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        {/* 3.Thủ thư điền đầy đủ các trường thông tin sách */}
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
                        {/* 4.Thủ thư nhấn [Thêm] */}
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
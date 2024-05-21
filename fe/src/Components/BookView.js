import { faBackward, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function BookView({ isLibrarian }) {
    const params = useParams();
    const [isLoading, SetLoading] = useState(true);
    const [BookRead, setBookRead] = useState([]);

    const isBackLink = isLibrarian ? "/librarian-portal/librarian-book-list" : "/customer-portal/customer-book-list";

    useEffect(() => {
        //On Load
        getBook();
    }, [])

    let getBook = async () => {
        try {
            const book = await axios.get(`${process.env.REACT_APP_API_URL}/book/${params.id}`);
            setBookRead(book.data);
            SetLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {/* <div><h3>BookView</h3></div> */}
            {
                isLoading ? <img src="https://media.giphy.com/media/9MImS9neQuoRa3D19h/giphy.gif" alt="Loading..." />
                    : <div className="card" style={{ color: "black" }}>
                        <div className="card-header">
                            <h3>{BookRead.title}</h3>
                            by {BookRead.author}
                        </div>
                        <div className="card-body">
                            <span className='book-image-view'>
                                <img src={BookRead.book_image} alt="Books_image_view" />
                            </span>
                            <p className="card-text">
                                <b>Story Description: </b>
                                <br />
                                {BookRead.description}
                            </p>
                            {
                                isLibrarian ?
                                    <div>
                                        <Link to={isBackLink} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                            <FontAwesomeIcon icon={faBackward} className="book-read mr-2" />
                                            Back
                                        </Link>
                                        <Link to={`/librarian-portal/book-edit/${BookRead.id}`} className='btn btn-sm btn-warning mx-3 shadow-sm'>
                                            <FontAwesomeIcon icon={faPencil} className="book-edit mr-2" />
                                            Edit
                                        </Link>
                                    </div>
                                    :
                                    <Link to={isBackLink} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                        <FontAwesomeIcon icon={faBackward} className="book-read mr-2" />
                                        Back
                                    </Link>
                            }
                        </div>
                    </div>
            }

        </>
    )
}

export default BookView
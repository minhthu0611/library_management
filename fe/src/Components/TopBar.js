import { faBars, faDoorOpen, faRightFromBracket, faUserSecret, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow" style={{ backgroundColor: "lightblue" }} >
            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link dropdown-toggle" to={"/"} id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <span className="mr-2 d-none d-lg-inline text-gray-600 medium">name</span> */}
                        <FontAwesomeIcon className='mr-2' icon={faUserSecret} size={"2x"} style={{ color: 'black' }} />
                        <button className='btn btn-sm btn-danger'>
                            <FontAwesomeIcon icon={faRightFromBracket} size={"2x"} />
                        </button>
                    </Link>
                </li>

            </ul>

        </nav>
    )
}

export default TopBar;
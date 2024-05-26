import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo_HCMUAF.svg";
import React from "react";
import { Link } from "react-router-dom";

function SideBar({ isLink }) {
    const { dashboardLink, bookDetailsLink } = isLink;
    return (
        <ul
            className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
            id="accordionSidebar">
            {/* <!-- Sidebar - Brand --> */}
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to={"/"}>
                <div className="sidebar-brand-icon">
                    <img
                        src={Logo}
                        alt="Library"
                        className="library-logo"
                    />
                </div>
                <div className="sidebar-brand-text mx-2">Quản lý thư viện</div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to={bookDetailsLink}>
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: "0.5rem" }} />
                    <span>Quản lí sách</span>
                </Link>
            </li>
        </ul>
    );
}

export default SideBar;

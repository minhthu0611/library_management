import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import TopBar from './TopBar'

function Portal({ isLibrarian }) {

    const isLink = isLibrarian ?
        {
            dashboardLink: "/librarian-portal/librarian-dashboard",
            bookDetailsLink: "/librarian-portal/librarian-book-list"
        }
        :
        {
            dashboardLink: "/customer-portal/customer-dashboard",
            bookDetailsLink: "/customer-portal/customer-book-list"
        }

    return (
        <>
            <div id="wrapper">
                <SideBar isLink={isLink} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar />
                        <div className="container-fluid">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portal
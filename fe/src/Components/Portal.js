import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import TopBar from './TopBar'

function Portal() {

    const isLink = 
        {
            dashboardLink: "/librarian-portal/librarian-dashboard",
            bookDetailsLink: "/librarian-portal/librarian-book-list"
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
import React from 'react'
import Card from '../Components/Card'

function CustomerDashboard() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Welcome Book Lover...!</h1>
            </div>
            <div className="row">
                <Card name="Customer Name" value='SaranRaj' color="primary" />
                <Card name="Number of Books Read" value="10" color="success" />
                <Card name="Date of Joining" value="01-03-2015" color="info" />
                <Card name="Time spend (in minutes)" value="1000" color="warning" />
            </div>
        </>
    )
}

export default CustomerDashboard
import React from 'react'
import { Line } from 'react-chartjs-2'
import Card from '../Components/Card'
import {
  Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Colors
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LibrarianDashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Welcome Librarian...</h1>
      </div>
      <div className="row">
        <Card name="Librarian Name" value='Bharath' color="primary" />
        <Card name="Number of Books" value="1000" color="success" />
        <Card name="No of persons Visited" value="50" color="warning" />
        {/* <Card name="Attendance(in%)" value="95%" color="danger" /> */}
      </div>
      <div className='row'>
        <div className='col lg-6 xl-8'>
          <Line options={{
            scales: {
              y: {
                min: 0,
                max: 100,
                ticks: {
                  stepSize: 10,
                },
              },
            },
            responsive: true,
            plugins: {
              legend:
              {
                position: 'top',
              },
              title:
              {
                display: true,
                text: 'Number of Readers visited in 2022',
              },
            },
          }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [{
                label: 'Monthly visited Readers',
                data: [50, 60, 67, 61, 78, 88, 90, 50, 70, 73, 95],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              },
              ]
            }}
          />
        </div>
      </div>
    </>
  )
}

export default LibrarianDashboard
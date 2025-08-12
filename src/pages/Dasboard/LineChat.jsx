// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 60, 40, 80, 70],
        borderColor: '#007bff',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Line data={data} options={options} />
      </div>

      {/* Real triangle shape using SVG */}
      <svg
        width="60"
        height="35"
        viewBox="0 0 60 35"
        style={{ marginTop: '20px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="30,0 0,35 60,35" fill="#007bff" />
      </svg>
    </div>
  );
};

export default LineChart;

import React, { useEffect, useRef } from 'react';
import './AnalysisGraph.css';
import Chart from 'chart.js/auto';

function AnalysisGraph() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && !chartInstance.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Monthly Earnings',
              data: [1000, 2000, 1500, 2500, 1800, 3000, 2800, 3500, 4000, 3800, 4200, 5000],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              fill: true,
              hitRadius: 10
            },
            {
              label: 'Monthly Basic Business Registered',
              data: [10, 20, 15, 25, 18, 30, 28, 35, 40, 38, 42, 50],
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderWidth: 2,
              fill: true,
              hitRadius: 10
            },
            {
              label: 'Monthly Premium Business Registered',
              data: [5, 10, 8, 12, 9, 15, 14, 17, 20, 19, 21, 25],
              borderColor: 'rgba(255, 206, 86, 1)',
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderWidth: 2,
              fill: true,
              hitRadius: 10
            }
          ]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 14,
                  family: 'Arial',
                  weight: 'bold'
                },
                color: 'black',
                padding: 20
              }
            },
            tooltip: {
              enabled: true,
              mode: 'index',
              intersect: false
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div className='container'>
      <h3 className='mb-2'>Monthly Analysis using graph</h3>
      <canvas ref={chartRef} width={1050} height={400}/>
    </div>
  );
}

export default AnalysisGraph;

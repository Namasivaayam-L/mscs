import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function Chart(props:any) {
    const barOptions = {
      // responsive: true,
      // plugins: {
      //   legend: {
      //     position: 'top' as const,
      //   },
      indexAxis: 'y' as const,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right' as const,
        },
        title: {
          display: true,
          text: props.title,
        },
      },
    };
    const lineOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: props.title,
        },
      },
    };
    
    const data = {
      labels:props.labels,
      datasets: [
        {
          fill: true,
          label: props.name ,
          data: props.data,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
  return(
    props.type==='Line'?  
      <Line options={lineOptions} data={data} />
      :
      <Bar options={barOptions} data={data} />
  )
}

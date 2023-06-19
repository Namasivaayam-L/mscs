import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	ArcElement,
	Tooltip,
	Legend
);

export default function Chart(props: any) {
  const [colors] = useState<Array<string>>([
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(255, 255, 0)",
	"rgb(255, 165, 0)",
	"rgb(255, 105, 180)",
	"rgb(128, 0, 128)",
	"rgb(165, 42, 42)",
	"rgb(0, 128, 128)",
	"rgb(0, 255, 128)",
	"rgb(128, 128, 0)",
	"rgb(0, 0, 0)",
	"rgb(128, 128, 128)",
	"rgb(192, 192, 192)",
	"rgb(255, 215, 0)",
	"rgb(210, 180, 140)",
	"rgb(0, 0, 128)",
	"rgb(0, 191, 255)",
	"rgb(34, 139, 34)",
	"rgb(128, 0, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(255, 255, 0)",
	"rgb(255, 165, 0)",
	"rgb(245, 245, 220)",
	"rgb(255, 105, 180)",
  ]);
  const [line, setLine] = useState(true);
  const [bar, setBar] = useState(false);
  const [doug, setDoug] = useState(false);
  const [bgColors,] = useState<Array<string>>([
	  "rgb(255, 0, 0, 0.2)",
	  "rgb(0, 255, 0, 0.2)",
	  "rgb(0, 0, 255, 0.2)",
	  "rgb(255, 0, 255, 0.2)",
	  "rgb(0, 255, 255, 0.2)",
	  "rgb(255, 255, 0, 0.2)",
	  "rgb(255, 165, 0, 0.2)",
	  "rgb(255, 105, 180, 0.2)",
	  "rgb(128, 0, 128, 0.2)",
	  "rgb(165, 42, 42, 0.2)",
	  "rgb(0, 128, 128, 0.2)",
	  "rgb(0, 255, 128, 0.2)",
	  "rgb(128, 128, 0, 0.2)",
	  "rgb(0, 0, 0, 0.2)",
		"rgb(128, 128, 128, 0.2)",
		"rgb(192, 192, 192, 0.2)",
		"rgb(255, 215, 0, 0.2)",
		"rgb(210, 180, 140, 0.2)",
		"rgb(0, 0, 128, 0.2)",
		"rgb(0, 191, 255, 0.2)",
		"rgb(34, 139, 34, 0.2)",
		"rgb(128, 0, 0, 0.2)",
		"rgb(255, 0, 255, 0.2)",
		"rgb(0, 255, 255, 0.2)",
		"rgb(255, 255, 0, 0.2)",
		"rgb(255, 165, 0, 0.2)",
		"rgb(245, 245, 220, 0.2)",
		"rgb(255, 105, 180, 0.2)",
  ]);
  
  useEffect(() => {
    setLine(props.type === "Line");
    setBar(props.type === "Bar");
	setDoug(props.type === "Doug");
  }, [props]);
    
    const barOptions = {
		indexAxis: "y" as const,
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				position: "right" as const,
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
				position: "top" as const,
			},
			title: {
				display: true,
				text: props.title,
			},
		},
	};

	const data = {
		labels: props.labels,
		datasets: [
			{
				fill: true,
				label: props.name,
				data: props.data,
				borderColor: colors.slice(0,props.labels.length-1),
				backgroundColor: bgColors.slice(0,props.labels.length-1),
			},
		],
	};
	const dougtData = {
		labels: props.labels,
		datasets: [
			{
				fill: true,
				label: props.name,
				data: props.data,
				borderColor: colors.slice(0,props.labels.length-1),
				backgroundColor: bgColors.slice(0,props.labels.length-1),
				borderWidth: 1, 
			},
		],
	};
	return (
		<>
			{line && <Line options={lineOptions} data={data} />}
			{doug && <Doughnut data={dougtData} />}
			{bar && <Bar options={barOptions} data={data} />}
		</>
	);
}

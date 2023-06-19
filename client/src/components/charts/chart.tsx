import React, { useCallback, useEffect, useState } from "react";
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
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";

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

export default function Chart(props: any) {
	const [colors, setColors] = useState<Array<string>>([]);
	const [line, setLine] = useState(true);
	const [bar, setBar] = useState(false);
	const [doug, setDoug] = useState(false);
	const [bgColors, setBgColors] = useState<Array<string>>([]);
  
	function genRandNum(): number {
		return Math.round(Math.random() * (255 - 0) + 0);
	}
  
  const getBgColors = useCallback(
    (alpha: number = 0.5) => {
      let bgColors = colors.map(
        (color: string) =>
          color.slice(0, 14) + "," + alpha.toString() + color.slice(14)
      );
      setBgColors(bgColors)
      console.log(bgColors);
      },
    [colors]
  );
  
	const getColors = useCallback((len: number) => {
    let colors = [];
		for (let i = 0; i < len; i++) {
      colors.push(
        String("rgb(" + genRandNum() + "," + genRandNum() + "," + genRandNum() + ")" ));
		}
		setColors(colors);
    console.log(colors);
    getBgColors(0.2)
    
	}, [getBgColors]);

    
      useEffect(() => {
        setLine(props.type === "Line");
        setBar(props.type === "Bar");
        setDoug(props.type === "Doug");
        props.type === "Doug"? getColors(props.labels.length): console.log()
      }, [props,getColors]);
    
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
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
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
				borderColor: colors,
        backgroundColor: bgColors,
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

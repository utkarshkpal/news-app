import React, { useEffect } from "react";
import chart from "chart.js";

export default function Graph1({ news }) {
  let myChart;

  //   const updateChart = (): void => {
  //     myChart.data.labels.push(getLabels());
  //     myChart.data.datasets.forEach((dataset) => {
  //       dataset.data.push(getData());
  //     });
  //     myChart.update();
  //   };

  const getLabels = () => news?.map((elem) => elem?.objectID);
  const getData = () => news?.map((elem) => elem?.points);

  useEffect(() => {
    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");

    myChart = new chart(ctx, {
      type: "line",
      data: {
        labels: getLabels(),
        datasets: [
          {
            label: "Votes",
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 5,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: getData(),
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Votes",
              },
              display: true,
              ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20,
              },
              gridLines: {
                drawTicks: false,
                display: false,
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "ID",
              },
              gridLines: {
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
              },
            },
          ],
        },
      },
    });
  }, [news]);

  //   useEffect(() => {
  //     updateChart();
  //   }, [news]);

  return (
    <div style={{ padding: 50 }}>
      <canvas id="myChart"></canvas>
    </div>
  );
}

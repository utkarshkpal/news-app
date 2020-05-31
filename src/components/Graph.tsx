import React, { useEffect } from "react";
import chart from "chart.js";

export default function Graph({ news }) {
  const getLabels = () => news?.map((elem) => elem?.objectID);
  const getData = () => news?.map((elem) => elem?.points);

  useEffect(() => {
    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");

    const myChart = new chart(ctx, {
      type: "line",
      data: {
        labels: getLabels(),
        datasets: [
          {
            label: "Votes",
            borderColor: "#1b619a",
            pointBorderColor: "#1b619a",
            pointBackgroundColor: "#1b619a",
            pointHoverBackgroundColor: "#1b619a",
            pointHoverBorderColor: "#1b619a",
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

  return (
    <div style={{ marginTop: 50 }}>
      <canvas id="myChart"></canvas>
    </div>
  );
}

import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Facet,
  Util,
} from "bizcharts";

export default ({ news }) => {
  const data = news.map((elem) => {
    return { id: elem.objectID, votes: elem.points };
  });
  console.log("data", data);

  const cols = {
    votes: {
      min: 0,
      range: [0, 1],
      alias: "Votes",
    },
    id: {
      alias: "ID",
    },
  };
  return (
    <div>
      <Chart height={400} data={data} scale={cols} forceFit>
        <Axis
          name="id"
          title={{
            position: "center",
            offset: 15,
            textStyle: {
              fontSize: "12",
              textAlign: "center",
              fill: "#999",
              fontWeight: "bold",
              rotate: 0,
            },
          }}
        />
        <Axis
          name="votes"
          title={{
            position: "center",
            offset: 5.5,
            textStyle: {
              fontSize: "12",
              textAlign: "right",
              fill: "#999",
              fontWeight: "bold",
              rotate: 0,
            },
          }}
        />

        <Geom type="line" position="id*votes" size={2} />
        <Geom
          type="point"
          position="id*votes"
          size={4}
          shape={"circle"}
          style={{
            stroke: "#fff",
            lineWidth: 1,
          }}
        />
      </Chart>
    </div>
  );
};

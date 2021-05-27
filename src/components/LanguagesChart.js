import React from "react";
import {ResponsiveBar} from "@nivo/bar";

const LanguagesChart = ({data}) => {
  const getLanguageData = (data) => {
    const responses = data ? data.answers?.items : [];
    const formattedData = [];

    responses.forEach((response) => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const idx = formattedData.findIndex(
        (i) => i.language === response.content
      );
      if (idx === -1) {
        formattedData.push({
          language: response.content,
          votes: 1,
          color: randomColor
        });
      } else {
        formattedData[idx] = {
          language: response.content,
          votes: formattedData[idx].votes + 1,
          color: randomColor
        };
      }
    });
    return formattedData;
  };

  return (
    <div style={{height: 400, width: "100%"}}>
      <ResponsiveBar
        data={getLanguageData(data)}
        keys={["votes"]}
        indexBy="language"
        margin={{top: 50, right: 0, bottom: 50, left: 60}}
        padding={0.3}
        colors={{scheme: "category10"}}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Lenguajes",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Votos",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default LanguagesChart;

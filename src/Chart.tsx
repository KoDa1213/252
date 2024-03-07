import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Chart = () => {
  const chartContainer = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create(
      "chartdiv",
      am4plugins_forceDirected.ForceDirectedTree
    );
    const networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.label.text = "{name}";
    networkSeries.fontSize = 8;
    networkSeries.linkWithStrength = 0;

    const nodeTemplate = networkSeries.nodes.template;
    nodeTemplate.tooltipText = "{name}";
    nodeTemplate.fillOpacity = 1;
    nodeTemplate.label.hideOversized = true;
    nodeTemplate.label.truncate = true;

    const linkTemplate = networkSeries.links.template;
    linkTemplate.strokeWidth = 1;
    const linkHoverState = linkTemplate.states.create("hover");
    linkHoverState.properties.strokeOpacity = 1;
    linkHoverState.properties.strokeWidth = 2;

    networkSeries.colors.list = [
      am4core.color("#22D3EE"),
      am4core.color("#BCD906"),
      am4core.color("#FB923C"),
      am4core.color("#D97706"),
      am4core.color("#2563EB"),
      am4core.color("#DC2626")
    ];

    networkSeries.data = [
      {
        name: "Dashboard",
        value: 204,
        linkWith: [],
        children: [
          {
            name: "David",
            value: 14
          }
        ]
      },
      {
        name: "Worksheet",
        value: 204,
        linkWith: [],
        children: [
          {
            name: "Paul the wine guy",
            value: 1
          }
        ]
      },
      {
        name: "Form Builder",
        value: 150,
        linkWith: [
        ],
        children: [
          {
            name: "Carol",
            value: 10
          }
        ]
      },
      {
        name: "Datasource",
        value: 108,
        linkWith: [],
        children: [
          {
            name: "Aurora",
            value: 2
          }
        ]
      },
      {
        name: "Import Excel",
        value: 128,
        linkWith: [
        ],
        children: [
          {
            name: "Paolo",
            value: 5
          }
        ]
      },
      {
        name: "Users",
        value: 100,
        linkWith: [
        ],
        children: [
          {
            name: "Lorraine",
            value: 2
          }
        ]
      }
    ];

(chartContainer.current as any)?.dispose();
  }, []);

  return <div id="chartdiv" style={{width: '100vw', height: '100vh', overflow: 'hidden'}}></div>;
};

export default Chart;

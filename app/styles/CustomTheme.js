import { assign } from "lodash";
import { color } from 'prototipo-native/app/styles';

// Colors
const colors = [
  color.blue, 
  color.lightBlue, 
  color.orange, 
  color.gold, 
  color.green, 
  color.red
];

// Typography
const sansSerif =
  "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 8;

// Layout
const baseProps = {
  width: 450,
  height: 300,
  padding: { top: 10, bottom: 26, left: 30, right: 25 },      // TODO: padding para el chart cuenta el padding para baseLabelStyles
  colorScale: colors
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 2,
  fill: color.dark,
  stroke: "transparent",
  strokeWidth: 0
};
const centeredLabelStyles = assign({ textAnchor: "end" }, baseLabelStyles);

// Strokes
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
export default {
  area: assign({
    style: {
      data: {
        fill: color.secondarySerie(0.1),
        stroke: color.secondarySerie(1),
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: color.dark,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin                   // en Figma no tienen stroke los axis
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding: 5
      }),
      grid: {
        fill: "none",
        stroke: "none",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: color.contrastSerie,
        padding: 0,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    },
    cornerRadius: 2,
    barRatio: 0.43
  }, baseProps),
  chart: baseProps,
  group: assign({
    colorScale: colors
  }, baseProps),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "horizontal",
    itemsPerRow: 3,
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  },
  line: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: color.contrastSerie,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 0,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, { padding: 20 })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 0
  },
  scatter: assign({
    style: {
      data: {
        fill: color.white,
        stroke: color.secondarySerie(1),
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    },
    symbol: "circle"
  }, baseProps),
  stack: assign({
    colorScale: colors
  }, baseProps),
  tooltip: {
    style: assign({}, centeredLabelStyles, { padding: 3, pointerEvents: "none" }),
    flyoutStyle: {
      stroke: color.dark,
      strokeWidth: 0,
      fill: color.dark,
      pointerEvents: "none"
    },
    cornerRadius: 0,
    pointerLength: 5
  }
};
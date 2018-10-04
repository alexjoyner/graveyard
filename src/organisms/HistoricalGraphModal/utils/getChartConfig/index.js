export const getChartConfig = (inputs) => {
  const seriesObjects = inputs.map((input, i) => ({
    name: `${input.source.inputname} (${input.source.unit})`,
    _colorIndex: i,
    marker: {
      enabled: false,
    },
    colorByPoint: false,
    data: input.data,
  }));
  const chartConfig = Object.assign({}, getBaseConfig(), {
    series: seriesObjects,
  });
  return chartConfig;
};

const getBaseConfig = () => ({
  chart: {
    type: 'line',
    zoomType: 'x',
  },
  boost: {
    useGPUTranslations: true,
  },
  title: {
    text: 'Historical Data View',
  },
  subtitle: {
    text: document.ontouchstart === undefined ?
      'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
  },
  xAxis: {
    type: 'datetime',
    labels: {
      style: {
        color: 'white',
      },
    },
    events: {
      afterSetExtremes: (event) => {
        const min = Math.ceil(event.min);
        const max = Math.floor(event.max);
        console.log({
          min,
          max,
        });
      },
    },
  },
  yAxis: {
    title: {
      text: 'Value',
    },
    labels: {
      format: '{value}',
      style: {
        color: 'white',
      },
    },
  },
  legend: {
    enabled: true,
  },
  series: [],
});

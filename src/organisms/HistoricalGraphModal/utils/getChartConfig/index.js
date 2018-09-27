export const getChartConfig = (inputs) => {
  let seriesObjects = inputs.map((input, i) => {
    return {
      name: `${input.source.inputname} (${input.source.unit})`,
      _colorIndex: i,
      marker: {
        enabled: false,
      },
      colorByPoint: false,
      data: input.data,
    }
  });
  const chartConfig = Object.assign({}, getBaseConfig(), {
    series: seriesObjects
  });
  return chartConfig;
};

const getBaseConfig = (info) => {
  return {
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
              var min = Math.ceil(event.min);
              var max = Math.floor(event.max);
              console.log({
                'min': min,
                'max': max
              })
          }
      }
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
  };
}
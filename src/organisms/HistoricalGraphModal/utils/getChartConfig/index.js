// function getData(n) {
//   var arr = [],
//     i,
//     x,
//     a,
//     b,
//     c,
//     spike;
//   for (
//     i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - n * 36e5;
//     i < n;
//     i = i + 1, x = x + 36e5
//   ) {
//     if (i % 100 === 0) {
//       a = 2 * Math.random();
//     }
//     if (i % 1000 === 0) {
//       b = 2 * Math.random();
//     }
//     if (i % 10000 === 0) {
//       c = 2 * Math.random();
//     }
//     if (i % 50000 === 0) {
//       spike = 10;
//     } else {
//       spike = 0;
//     }
//     arr.push([
//       x,
//       2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
//     ]);
//   }
//   return arr;
// }
// var n = 650002,
//   data = getData(n);

// export const getChartConfig = (info) => {
//   return {
//     chart: {
//       zoomType: 'x'
//     },
//     boost: {
//       enabled: true,
//       useGPUTranslations: true,
//       boostThreshold: 6501,
//     },
//     title: {
//       text: 'Highcharts drawing ' + n + ' points'
//     },

//     subtitle: {
//       text: 'Using the Boost module'
//     },

//     tooltip: {
//       valueDecimals: 2
//     },

//     xAxis: {
//       type: 'datetime'
//     },

//     series: [{
//       data: data,
//       lineWidth: 0.5,
//       name: 'Hourly data points',
//       _colorIndex: 3,
//       marker: {
//         enabled: false,
//       },
//     }]
//   }
// }

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
  console.log(chartConfig);
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
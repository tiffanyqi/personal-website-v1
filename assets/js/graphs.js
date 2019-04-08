/* Parameters that apply to all chart types
 * {String} containerId: id of the graph to be displayed
 * {String} dataSourceUrl: source of data
 * {Object} options: options to control the graph
 * {String} query: query for the graph. looks like this: SELECT A,H,F, where the first letter is the column label
 */
function drawChart({chartType, containerId, dataSourceUrl, query, options}) {
  const wrapper = new google.visualization.ChartWrapper(arguments[0]);
  wrapper.draw();
}

/* Parameters that apply to all options
 * {String} hAxisTitle: title of the horzontal axis
 * {String} title: title of the graph
 * {String} vAxisTitle: title of the vertical axis
 */
function formatOptions({hAxisTitle=null, showLegend, title, vAxisTitle=null, specialChartOptions=null}) {
  let options = {
    ...specialChartOptions,
    'hAxis': {'title': hAxisTitle},
    title,
    'vAxis': {'title': vAxisTitle},
  };
  if (showLegend === false) {
    options = {
      ...options,
      legend: 'none',
    }
  }
  return options;
}

/* Area Chart, extra options
 * {String} isStacked: stacked options, could be true, false, percent, relative
 */
function drawAreaChart({containerId, hAxisTitle=null, isStacked='false', query, title, vAxisTitle=null, url}) {
  const options = formatOptions({hAxisTitle, title, vAxisTitle, specialChartOptions: {
    isStacked,
  }});
  drawChart({
    ...arguments[0],
    chartType: 'AreaChart',
    dataSourceUrl: url,
    options,
  });
}

/* Column Chart, extra options
 * {String} isStacked: stacked options, could be true, false, percent, relative
 * {Boolean} showLegend: whether to show the legend at all
 */
function drawColumnChart({containerId, hAxisTitle=null, isStacked='false', query, showLegend=null, title, url, vAxisTitle=null}) {
  let options = formatOptions({hAxisTitle, showLegend, title, vAxisTitle, specialChartOptions: {
    'bar': {'groupWidth': '50%'},
    isStacked,
  }});
  drawChart({
    ...arguments[0],
    chartType: 'ColumnChart',
    dataSourceUrl: url,
    options,
  });
}

/* Line Chart
 */
function drawLineChart({containerId, hAxisTitle=null, query, showLegend=null, title, vAxisTitle=null, url}) {
  const options = formatOptions({hAxisTitle, showLegend, title, vAxisTitle, specialChartOptions: {
    'curveType': 'function'
  }});
  drawChart({
    ...arguments[0],
    chartType: 'LineChart',
    dataSourceUrl: url,
    options,
  });
}

/* Scatter Chart, extra options
 * {String} showR2: whether to display the r2 value, true/false
 * {String} visibleInLegend: whether to display the r2 value in the legend, true/false
 */
function drawScatterChart({containerId, hAxisTitle=null, query, showR2='true', title, vAxisTitle=null, visibleInLegend='true', url}) {
  const options = formatOptions({hAxisTitle, title, vAxisTitle, specialChartOptions: {
    'trendlines': {
      '0': {showR2, visibleInLegend},
    },
  }});
  drawChart({
    ...arguments[0],
    chartType: 'ScatterChart',
    dataSourceUrl: url,
    options,
  });
}
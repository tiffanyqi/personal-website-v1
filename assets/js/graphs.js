/*
  Column Chart
  * {String} url: source of data
  * {String} query: query for the graph. looks like this: SELECT A,H,I,J,N,S,T, where the first letter is the column label
  * {String} title: title of the graph
  * {String} hAxisTitle: title of the horzontal axis
  * {String} vAxisTitle: title of the vertical axis
  * {String} isStacked: true/false
  * {String} id: id of the graph to be displayed
*/
function drawColumnChart({containerId, hAxisTitle=null, isStacked, query, title, url, vAxisTitle=null}) {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'ColumnChart',
    dataSourceUrl: url,
    query,
    options: {
      'title': title,
      'hAxis': {'title': hAxisTitle},
      'vAxis': {'title': vAxisTitle},
      'bar': {'groupWidth': '50%'},
      'isStacked': isStacked,
    },
    containerId,
  });
  wrapper.draw();
}

// line chart
function drawSemVCumulative() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'Line',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/18hPB3_g7A_tC4RAvK6LbLyZYf8tilpum0lSdysCawzI/edit#gid=0',
    query: 'SELECT A,G,F',
    containerId: 'SemVCumulative'
  });
  wrapper.draw();
}

// scatter chart
function drawGradeVClass() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'ScatterChart',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Lj1mwa9xA3SgPuOISCVY_TReWmf0ecMpHj31NxQRE4s/edit#gid=0',
    query: 'SELECT E,J',
    options: {
      'title': 'Grade Received vs. Time Spent Going to Class',
      'hAxis': {'title': 'Grade Received (GPA)'},
      'vAxis': {'title': 'Time Spent (hours)'},
      'trendlines': {
        '0': {
          'showR2': 'true',
          'visibleInLegend': 'true'
        }
      },
    },
    containerId: 'GradeVClass'
  });
  wrapper.draw()
}

// bubble chart
function drawGradeVFinalGrade() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'BubbleChart',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Lj1mwa9xA3SgPuOISCVY_TReWmf0ecMpHj31NxQRE4s/edit#gid=0',
    query: 'SELECT A,E,R,T',
    options: {
      'title': 'Grade Received vs. Final Exam Grade w/ % Weights',
      'hAxis': {'title': 'Grade Received (GPA)'},
      'vAxis': {'title': 'Final Exam Grade (%)'},
      'bubble': {'textStyle': {'color': 'transparent'}},
      'colorAxis': 'null' // still looks weird
    },
    containerId: 'GradeVFinalGrade'
  });
  wrapper.draw()
}

function drawGradeVPercent() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'ScatterChart',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1Lj1mwa9xA3SgPuOISCVY_TReWmf0ecMpHj31NxQRE4s/edit#gid=0',
    query: 'SELECT E,H,V',
    options: {
      'title': 'Grade Received vs. Percentage Received',
      'hAxis': {'title': 'Grade Received (GPA)'},
      'vAxis': {'title': 'Percentage (%)'},
      'trendlines': {
        '0': {
        },
        '1': {
          'lineWidth': 30,
        }
      },
    },
    containerId: 'GradeVPercent'
  });
  wrapper.draw()
}

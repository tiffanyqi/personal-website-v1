google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawHumanLanguagesChart);
google.charts.setOnLoadCallback(drawProgrammingLanguagesChart);
google.charts.setOnLoadCallback(drawTimeSpentChart);

const barOptions = {
  backgroundColor: '#c5d3de',
  bars: 'horizontal',
  legend: {
    position: 'none',
  },
  tooltip: {
    isHtml: true,
  },
}

function drawHumanLanguagesChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Proficiency', {role: 'tooltip'}],
    ['English', 100, 'Born and raised in the US.'],
    ['Shanghainese', 70, 'Raised in a Mandarin/Shanghainese bilingual household. Can speak and listen conversationally.'],
    ['Mandarin Chinese', 60, 'Raised in a Mandarin/Shanghainese bilingual household. Can speak and listen conversationally, and read 40% of characters'],
    ['French', 25, 'Took 4 years in high school and 1 semester in college. Still remembers how to conjugate, speak, and read.'],
    ['Japanese', 20, 'Self taught Genki 1. Can read hiragana, katakana, and 15% kanji, speaking and listening skills lacking. Could pass the JLPT N5.'],
    ['Korean', 10, 'Self taught. Can read characters, rudimentary knowledge of grammar and knows some words.'],
  ]);
  var chart = new google.visualization.BarChart(document.getElementById('human-languages-proficiency'));
  chart.draw(data, barOptions);
}

function drawProgrammingLanguagesChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Proficiency'],
    ['Javascript', 70],
    ['PanelJS', 60],
    ['AngularJS' , 30],
    ['Jade/HTML', 85],
    ['CSS/Sass', 85],
    ['Python', 60],
    ['Ruby', 40],
    ['Java', 20],
  ]);
  var chart = new google.visualization.BarChart(document.getElementById('programming-languages-proficiency'));
  chart.draw(data, barOptions);
}

function drawTimeSpentChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Proficiency'],
    ['Coding', 33.75],
    ['Baking' , 7.25],
    ['Language Learning', 5.5],
    ['Aerial Silks', 5.00],
    ['Projects', 4],
    ['Friends and Family', 20.75],
    ['Sleep', 52],
    ['Hygiene and Commute', 14.25],
    ['Planning', 8.00],
    ['Physical and Mental Health', 4],
    ['Other', 13.50],
  ]);
  var options = {
    backgroundColor: '#c5d3de',
    chartArea: {
      height: 350,
    },
    height: 400,
    legend: {
      alignment: 'center',
      position: 'labeled',
      textStyle: {
        fontName: 'PT Sans',
      },
    },
    pieHole: 0.25,
    pieSliceTextStyle: {
      fontName: 'PT Sans',
    },
    slices: {
      0: {color: '#ea9999'}, // coding
      1: {color: '#e06666'}, // baking
      2: {color: '#cc0000'}, // language      
      3: {color: '#990000'}, // aerial
      4: {color: '#660000'}, // projects
      5: {}, // friends
      6: {color: '#ffd966'}, // sleep
      7: {color: '#f1c232'}, // hygiene
      8: {color: '#bf9000'}, // planning
      9: {color: '#7f6000'}, // health
      10: {}, // other
    },
    width: 900,
  }
  var chart = new google.visualization.PieChart(document.getElementById('time-spent'));
  chart.draw(data, options);
}

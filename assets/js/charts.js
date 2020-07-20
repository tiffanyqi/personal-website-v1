google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawHumanLanguagesChart);
google.charts.setOnLoadCallback(drawProgrammingLanguagesChart);
google.charts.setOnLoadCallback(drawTimeSpentChart);

const barOptions = {
  backgroundColor: '#c5d3de',
  bar: {
    groupWidth: '90%',
  },
  bars: 'horizontal',
  chartArea: {
    height: 400,
  },
  fontName: 'PT Sans',
  fontSize: 16,
  legend: {
    position: 'none',
  },
  titlePosition: 'none',
  tooltip: {
    isHtml: true,
  },
}

function drawHumanLanguagesChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Proficiency', {role: 'tooltip'}, {role: 'style'}],
    ['English', 100, '100% Proficiency - Born and raised in the US.', '#778fb5'],
    ['Shanghainese', 70, '70% Proficiency - Raised in a Mandarin/Shanghainese bilingual household. Can speak and listen conversationally.', '#e18f77'],
    ['Mandarin Chinese', 60, '60% Proficiency - Raised in a Mandarin/Shanghainese bilingual household and took 1.5 years of college advanced Chinese. Can speak and listen conversationally, and read 40% of characters.', '#e18f77'],
    ['French', 25, '25% Proficiency - Took 4 years in high school and 1 semester in college. Still remembers how to conjugate, speak, and read.', '#778fb5'],
    ['Japanese', 20, '20% Proficiency - Self taught Genki 1. Can read hiragana, katakana, and 15% kanji, speaking and listening skills lacking. Could pass the JLPT N5.', '#e18f77'],
    ['Korean', 10, '10% Proficiency - Self taught. Can read characters, rudimentary knowledge of grammar and knows some words.', '#e18f77'],
  ]);
  var chart = new google.visualization.BarChart(document.getElementById('human-languages-proficiency'));
  chart.draw(data, barOptions);
}

function drawProgrammingLanguagesChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Proficiency', {role: 'tooltip'}, {role: 'style'}],
    ['HTML', 85, '85% Proficiency - 5 years, used at Mixpanel.', '#778fb5'],
    ['CSS/Sass', 85, '85% Proficiency - 5 years, used at Mixpanel.', '#778fb5'],
    ['Javascript', 70, '70% Proficiency - 3 years, most used language at Mixpanel. Can use it without breaking anything.', '#778fb5'],
    ['Python', 70, '70% Proficiency - 4 years, used at Mixpanel, 3 side projects, and my default back-end language.', '#e18f77'],
    ['Django', 70, '70% Proficiency - 3 years, used at Mixpanel, 3 side projects, and my default web app framework. Can create a working web app from start to finish.', '#e18f77'],
    ['Jade', 60, '60% Proficiency - 3 years, used at Mixpanel.', '#778fb5'],
    ['PanelJS', 60, '60% Proficiency - 2 year, primary JS framework at Mixpanel. Can create components and use it without breaking anything.', '#778fb5'],
    ['Ruby', 50, '50% Proficiency - 1 year, one class and side project. Knows syntax and can use it as a back-end language.', '#e18f77'],
    ['Java', 50, '50% Proficiency - 1 year, one class and side project. Knows syntax and can use it as a back-end language.', '#e18f77'],
    ['AngularJS' , 40, '40% Proficiency - 1/2 year, one side project. Can work with it.', '#778fb5'],
  ]);
  var chart = new google.visualization.BarChart(document.getElementById('programming-languages-proficiency'));
  chart.draw(data, barOptions);
}

function drawTimeSpentChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Proficiency'],
    ['Coding and Work', 32.75],
    ['Baking' , 9.5],
    ['Aerial Silks and Contortion', 8.25],
    ['Friends and Family', 9.5],
    ['Sleep', 55.25],
    ['Planning', 8.00],
    ['Other', 31.25],
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
      2: {color: '#cc0000'}, // aerial      
      3: {}, // friends
      4: {}, // sleep
      5: {}, // planning
      6: {color: '#bf9000'}, // other
    },
    width: 900,
  }
  var chart = new google.visualization.PieChart(document.getElementById('time-spent'));
  chart.draw(data, options);
}

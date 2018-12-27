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
  height: 400,
  fontName: 'PT Sans',
  fontSize: 16,
  legend: {
    position: 'none',
  },
  tooltip: {
    isHtml: true,
  },
  width: 500,
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
    ['HTML', 85, '85% Proficiency - 4 years, used at Mixpanel.', '#778fb5'],
    ['CSS/Sass', 85, '85% Proficiency - 4 years, used at Mixpanel.', '#778fb5'],
    ['Javascript', 70, '70% Proficiency - 2 years, most used language at Mixpanel. Can use it without breaking anything.', '#778fb5'],
    ['Python', 70, '70% Proficiency - 3 years, used at Mixpanel, 3 side projects, and my default back-end language.', '#e18f77'],
    ['Django', 70, '70% Proficiency - 2 years, used at Mixpanel, 3 side projects, and my default web app framework. Can create a working web app from start to finish.', '#e18f77'],
    ['Jade', 60, '60% Proficiency - 2 years, used at Mixpanel.', '#778fb5'],
    ['PanelJS', 60, '60% Proficiency - 1 year, primary JS framework at Mixpanel. Can create components and use it without breaking anything.', '#778fb5'],
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

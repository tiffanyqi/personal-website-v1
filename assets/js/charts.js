google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawHumanLanguagesChart);
google.charts.setOnLoadCallback(drawProgrammingLanguagesChart);
google.charts.setOnLoadCallback(drawTimeSpentChart);

const defaultOptions = {
  bars: 'horizontal',
  legend: {position: 'none'},
}

function drawHumanLanguagesChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Proficiency'],
    ['English', 100],
    ['Mandarin Chinese', 60],
    ['Shanghainese', 70],
    ['Japanese', 20],
    ['French', 15],
    ['Korean', 10],
  ]);
  var chart = new google.charts.Bar(document.getElementById('human-languages-proficiency'));
  chart.draw(data, defaultOptions);
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
  var chart = new google.charts.Bar(document.getElementById('programming-languages-proficiency'));
  chart.draw(data, defaultOptions);
}

function drawTimeSpentChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Proficiency'],
    ['Coding', 33.75],
    ['Projects', 4],
    ['Aerial Silks', 5.00],
    ['Baking' , 4.25],
    ['Language Learning', 5.5],
    ['Friends and Family', 23.75],
    ['Sleep', 52],
    ['Physical and Mental Health', 4],
    ['Planning', 8.00],
    ['Hygiene and Commute', 14.25],
    ['Other', 13.50],
  ]);
  var options = {
    ...defaultOptions,
    height: 400,
    legend: {position: 'right'},
    width: 800,
  }
  var chart = new google.visualization.PieChart(document.getElementById('time-spent'));
  chart.draw(data, options);
}

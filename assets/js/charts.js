google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawHumanLanguagesChart);
google.charts.setOnLoadCallback(drawProgrammingLanguagesChart);
google.charts.setOnLoadCallback(drawTimeSpentChart);

const barOptions = {
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
  var chart = new google.charts.Bar(document.getElementById('programming-languages-proficiency'));
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
    chartArea: {
      height: 350,
    },
    height: 400,
    legend: {
      alignment: 'center',
      position: 'labeled',
      textStyle: {
        fontName: 'Montez',
        fontSize: 22,
      },
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

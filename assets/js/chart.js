google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Mês", "Progresso %"],
    ["Jan", 35],
    ["Fev", 40],
    ["Mar", 45],
    ["Abr", 50],
    ["Mai", 55],
    ["Jun", 58],
    ["Jul", 60],
  ]);

  var options = {
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#4CAF50"],
    backgroundColor: "#f9f9f9",
    chartArea: { width: "85%", height: "70%" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}

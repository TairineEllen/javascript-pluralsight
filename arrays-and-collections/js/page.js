/*Charts*/

let chart = document.getElementById('monthlySales').getContext('2d');
let pieChart = document.getElementById('deptSales').getContext('2d');

let monthlySales = Array.of(12, 19, 3);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

let deptSales = Array.of(12, 19, 3);
let salesLabels = Array.of('Hiking', 'Running', 'Hunting');

/*Bar Chart*/

var monthlySalesChart = new Chart(chart, {
  type: 'bar',
  data: {
    labels: monthlyLabels,
    datasets: [{
      label: '# of Sales',
      data: monthlySales,
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
      ],
      borderWidth: 0
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

/*Pie Chart*/

var deptSalesChart = new Chart(pieChart, {
  type: 'pie',
  data: {
    labels: salesLabels,
    datasets: [{
      label: '# of Sales',
      data: deptSales,
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
      ],
      borderWidth: 0
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})
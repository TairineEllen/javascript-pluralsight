/*Charts*/

let chart = document.getElementById('monthlySales').getContext('2d');
let pieChart = document.getElementById('deptSales').getContext('2d');

/*Bar Chart*/

var monthlySalesChart = new Chart(chart, {
  type: 'bar',
  data: {
    labels: ['Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Sales',
      data: [12, 19, 3],
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
    labels: ['Hiking', 'Running', 'Hunting'],
    datasets: [{
      label: '# of Sales',
      data: [12, 19, 3],
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
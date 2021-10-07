/*Charts*/

let chart = document.getElementById('monthlySales').getContext('2d');
let pieChart = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

let monthlySales = Array.of(1200, 9000, 3000);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

let deptSales = Array.of(12, 9, 3);
let salesLabels = Array.of('Hiking', 'Running', 'Hunting');

function addYearlyTotal(a, b, c) {
  return a + b + c;
}

let octNums = Array.of(1200, 1000, 9000);
let novNums = Array.of(1100, 2000, 9000);
let decNums = Array.of(4000, 1000, 5000);
let total = Array.of(addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums));

let yearlyTotal = addYearlyTotal(...total);
yearlyLabel.innerHTML = `$${yearlyTotal}`;
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
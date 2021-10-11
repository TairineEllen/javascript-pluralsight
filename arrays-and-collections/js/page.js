/*Charts*/

let chart = document.getElementById('monthlySales').getContext('2d');
let pieChart = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

// let monthlySales = Array.of(500, 9000, 3000, 1000);
// let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

// let deptSales = Array.of(12, 9, 3);
// let salesLabels = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal = 0;
const monthlySales = new Set();
const monthlyLabels = new Set();

function addSale() {
  monthlySales.add(newAmount.value);
  monthlyLabels.add(newMonth.value);
  alert(`You have entered in ${monthlySales.size} sales`);
}

function deleteVal() {
  monthlySales.delete('1500');
  console.log(monthlySales);
}

function addYearlyTotal(x) {
  yearlyTotal = yearlyTotal + x;
}

monthlySales.forEach(addYearlyTotal);

let octNums = Array.of(1200, 1000, 9000);
let novNums = Array.of(1100, 2000, 9000);
let decNums = Array.of(4000, 1000, 5000);

yearlyLabel.innerHTML = `$${yearlyTotal}`;

function findOver1000() {
  let firstThousand = monthlySales.find(element => element > 1000);
  alert(firstThousand);
}

function resetNum() {
  monthlySales.fill(0);
  monthlySalesChart.update();
}
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
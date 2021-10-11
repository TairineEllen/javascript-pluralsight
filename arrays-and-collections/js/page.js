/*Charts*/

let chart = document.getElementById('monthlySales').getContext('2d');
let pieChart = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');
let hikingRadio = document.getElementById('hiking');
let runningRadio = document.getElementById('running');
let huntingRadio = document.getElementById('hunting');

let yearlyTotal = 0;
const monthlySales = new Set();
const monthlyLabels = new Set();
const categories = new WeakSet();

let hiking = { category: 'Hiking' };
let running = { category: 'Running' };
let hunting = { category: 'Hunting' }

function addSale() {
  monthlySales.add(parseInt(newAmount.value));
  monthlyLabels.add(newMonth.value);

  yearlyTotal = 0;

  monthlySalesChart.data.datasets.forEach(dataset => {
    dataset.data = [];
  })

  for (let amount of monthlySales) {
    yearlyTotal = amount + yearlyTotal;
    yearlyLabel.innerHTML = yearlyTotal;

    monthlySalesChart.data.datasets.forEach(dataset => {
      dataset.data.push(amount)
    })
  }
  monthlySalesChart.data.labels = Array.from(monthlyLabels);
  monthlySalesChart.update();

  if (hikingRadio.checked) {
    categories.add(hiking);
  } else if (runningRadio.checked) {
    categories.add(running);
  } else if (huntingRadio) {
    categories.add(hunting);
  }
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
    labels: [],
    datasets: [{
      label: '# of Sales',
      data: [],
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
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("submitted");
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = {
    amount: 100000,
    years: 10,
    rate: 6,
  };
  let lAmount = document.getElementById("loan-amount").value;
  let lYears = document.getElementById("loan-years").value;
  let lRate = document.getElementById("loan-rate").value;
  lAmount = values.amount;
  lYears = values.years;
  lRate = values.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let i = (values.rate / 100) / 12;
  let n = Math.floor(values.years * 12);
  monthly = (principle * i) / (1 -((1 + i) ** -n));
  return `$${(Math.round(monthly * 100) / 100).toFixed(2)}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let lMonthly = document.getElementById("monthly-payment");
  lMonthly.innerText = monthly;
}

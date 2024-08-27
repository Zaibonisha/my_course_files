// Income and Expense classes
class Income {
    constructor(name, amount, recurring) {
      this.name = name;
      this.amount = amount;
      this.recurring = recurring;
    }
  }
  
  class Expense {
    constructor(name, amount, recurring) {
      this.name = name;
      this.amount = amount;
      this.recurring = recurring;
    }
  }
  
  // Initialize empty arrays for incomes and expenses
  let incomes = [];
  let expenses = [];
  
  // Retrieve incomes and expenses from sessionStorage if available
  if (sessionStorage.getItem('incomes')) {
    incomes = JSON.parse(sessionStorage.getItem('incomes'));
  }
  if (sessionStorage.getItem('expenses')) {
    expenses = JSON.parse(sessionStorage.getItem('expenses'));
  }
  
  // Debugging: Log retrieved data
  console.log('Retrieved Incomes:', incomes);
  console.log('Retrieved Expenses:', expenses);
  
  // Function to add new income
  function addNewIncome() {
    const newIncomeName = document.getElementById('newIncomeName').value;
    const newIncomeAmount = parseFloat(document.getElementById('newIncomeAmount').value);
    const newIncomeRecurring = document.getElementById('newIncomeRecurring').checked;
  
    if (newIncomeName && !isNaN(newIncomeAmount)) {
      const newIncome = new Income(newIncomeName, newIncomeAmount, newIncomeRecurring);
      incomes.push(newIncome);
      sessionStorage.setItem('incomes', JSON.stringify(incomes));
      console.log('Income added:', newIncome);
      updateCalculations();
    } else {
      alert('Please enter valid income details.');
    }
  }
  
  // Function to add new expense
  function addNewExpense() {
    const newExpenseName = document.getElementById('newExpenseName').value;
    const newExpenseAmount = parseFloat(document.getElementById('newExpenseAmount').value);
    const newExpenseRecurring = document.getElementById('newExpenseRecurring').checked;
  
    if (newExpenseName && !isNaN(newExpenseAmount)) {
      const newExpense = new Expense(newExpenseName, newExpenseAmount, newExpenseRecurring);
      expenses.push(newExpense);
      sessionStorage.setItem('expenses', JSON.stringify(expenses));
      console.log('Expense added:', newExpense);
      updateCalculations();
    } else {
      alert('Please enter valid expense details.');
    }
  }
  
  // Function to update calculations and display results
  function updateCalculations() {
    const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const disposableIncome = totalIncome - totalExpenses;
  
    console.log("Total Income:", totalIncome);
    console.log("Total Expenses:", totalExpenses);
    console.log("Disposable Income:", disposableIncome);
  
    document.getElementById('totalIncome').textContent = `R ${totalIncome.toFixed(2)}`;
    document.getElementById('totalExpenses').textContent = `R ${totalExpenses.toFixed(2)}`;
    document.getElementById('disposableIncome').textContent = `R ${disposableIncome.toFixed(2)}`;
  
    // Display savings input section if disposable income is positive
    if (disposableIncome > 0) {
      document.getElementById('savingsSection').style.display = 'block';
    } else {
      document.getElementById('savingsSection').style.display = 'none';
    }
  }
  
  // Function to calculate remaining disposable income after savings
  function calculateRemainingDisposableIncome() {
    const savingsAmount = parseFloat(document.getElementById('savingsAmount').value);
    if (!isNaN(savingsAmount)) {
      const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
      const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
      const disposableIncome = totalIncome - totalExpenses;
      const remainingDisposableIncome = disposableIncome - savingsAmount;
  
      document.getElementById('remainingDisposableIncome').textContent = `Remaining Disposable Income: R ${remainingDisposableIncome.toFixed(2)}`;
      document.getElementById('remainingDisposableIncome').style.display = 'block';
    } else {
      alert('Please enter a valid savings amount.');
    }
  }
  
  // Event listeners for buttons
  document.getElementById('addIncomeBtn').addEventListener('click', addNewIncome);
  document.getElementById('addExpenseBtn').addEventListener('click', addNewExpense);
  document.getElementById('calculateSavingsBtn').addEventListener('click', calculateRemainingDisposableIncome);
  
  // Initial update of calculations
  updateCalculations();
  
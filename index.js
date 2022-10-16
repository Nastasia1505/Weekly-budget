const userBudget = document.querySelector('.budget-text');
const budgetBtn = document.querySelector('.budget-btn');
const userExpenseName = document.querySelector('.expense__input');
const userExpenseValue = document.querySelector('.expense-value');
const expenseBtn = document.querySelector('.expense-btn');
const budgetInput = document.querySelector('.budget');
const left = document.querySelector('.left');
const userExpense = document.querySelector('.user-expenses');
const balanceHtml = document.querySelector('.balance');
const body = document.querySelector('body')
let balance = +0;
let expense = +0;
let budget = +0;


budgetBtn.addEventListener('click', () => {
    if (userBudget.value.trim() == 0 || userBudget.value == "") {
        alert('Add budget')
    } else {
        budget = userBudget.value;
        budgetInput.innerHTML = ('Budget: ' + budget);
        userBudget.value = ''
    }
}
)

expenseBtn.addEventListener('click', () => {

    // console.log('2')
    if (userExpenseName.value.trim() == 0 || userExpenseName.value.trim() == "") {
        alert('Add expense')
    } else if (userExpenseValue.value.trim() == 0 || userExpenseValue.value.trim() == '') {
        alert('Add expense')
    }

    if (userExpenseName.value.trim() && userExpenseValue.value.trim()) {
        expense += (+userExpenseValue.value);
        let newItem = document.createElement('div')
        newItem.classList.add('expense-item')
        newItem.innerHTML = (userExpenseName.value + ': $ ' + userExpenseValue.value)
        userExpense.appendChild(newItem)

        console.log(expense)
    }

    if (expense >= 0) {
        left.textContent = +expense;
        left.innerHTML = ('Left: $ ' + left.textContent)
    }
    if (expense > 0) {
        balance = budget - expense;
        balanceHtml.innerHTML = ('Balance: $ ' + (budget - expense));
    }
 if (balance<0){
body.style.backgroundImage = 'url(./second.png)'
 }
    userExpenseName.value = " ";
    userExpenseValue.value = ' ';

})


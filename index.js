const userBudget = document.querySelector('.budget-text');
const budgetBtn = document.querySelector('.budget-btn');
const userExpenseName = document.querySelector('.expense__input');
const userExpenseValue = document.querySelector('.expense-value');
const expenseBtn = document.querySelector('.expense-btn');
const budgetInput = document.querySelector('.budget');
const left = document.querySelector('.left');
const userExpense = document.querySelector('.user-expenses');
let balance = 0;
let expense = 0;
let budget = 0;

let listItem = [];

// [{
//     name: milk,
//     price: 20
// }]


userExpenseName.focus();
budgetBtn.addEventListener('click', () => {
    if ((Number.isNaN(Number(userBudget.value))) || Number(userBudget.value) <= 0) {
        alert('Add budget')
    } else {
        budget = userBudget.value;
        budgetInput.innerHTML = ('Budget: ' + budget);
        userBudget.value = '';
        userBudget.style.display = 'none';
        budgetBtn.style.display = 'none';
    }
})

expenseBtn.addEventListener('click', () => {

    if (!userExpenseName.value.trim()) {
        alert('Add expense name')
    } else if (Number.isNaN(Number(userExpenseValue.value)) || Number(userExpenseValue.value) <= 0) {
        alert('Add expense amount')
    } else {
        expense += (+userExpenseValue.value);
        makeNewItem(userExpenseName, userExpenseValue);

        newItem = {
            name: userExpenseName.value,
            price: +userExpenseValue.value
        }

        listItem.push(newItem)
        console.log(listItem)


        localStorage.setItem('user', JSON.stringify(listItem));
        console.log(JSON.parse(localStorage.getItem('user')));
        let users = JSON.parse(localStorage.getItem('user'));
        newItem = ""
    }

    if (expense >= 0) {
        left.textContent = +expense;
        left.innerHTML = ('Expense: $ ' + left.textContent)

        const balanceHtml = document.querySelector('.balance');

        balance = budget - expense;
        balanceHtml.innerHTML = ('Balance: $ ' + (budget - expense));
    }
    if (balance < 0) {
        const body = document.querySelector('body');
        body.style.backgroundImage = 'url(./second.png)'
    }
    userExpenseName.value = " ";
    userExpenseValue.value = ' ';

})

function makeNewItem(userExpenseName, userExpenseValue) {

    let newItem = document.createElement('div');
    newItem.classList.add('expense-item');
    newItem.innerHTML = (userExpenseName.value + ': $ ' + userExpenseValue.value)
    userExpense.appendChild(newItem)
}

document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage>0){
        array.forEach(element => {
            
        });
    }
    //проверка пустой сторадж или нет если не пустой то пробьегайся циклом по всем элементам и отобразжи их
    });
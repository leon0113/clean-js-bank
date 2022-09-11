//! input field function
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const value = parseFloat(inputField.value);
    inputField.value = '';
    return value;
}


function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const value = parseFloat(fieldTag.innerText);
    return value;
}

//! display board function

function updateTotal(fieldId, amount) {
    // const totalTag = document.getElementById(fieldId);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}


//! Total balance function

function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTag.innerText);
    let nwBalance;
    if (isAdding == true) {
        nwBalance = previousBalance + amount;
    }
    else {
        nwBalance = previousBalance - amount;
    }
    balanceTag.innerText = nwBalance;
}


//! handle deposite sector

document.getElementById('deposite-btn').addEventListener('click', function () {
    const amount = getInputValue('deposite');
    if (amount > 0) {
        updateTotal('deposite-Amount', amount);
        updateBalance(amount, true);
    }

})


//! handle withdraw sector

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-Amount', amount);
        updateBalance(amount, false);
    }


})
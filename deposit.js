document.getElementById('btn-deposit').addEventListener('click', function () {
    const depoAmount = document.getElementById('deposit-field');
    const newDepositAmountString = depoAmount.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const totalDepositAmount = document.getElementById('total-deposit');
    const previousTotalAmountString = totalDepositAmount.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);

    const currentTotalAmount = previousTotalAmount + newDepositAmount;
    totalDepositAmount.innerText = currentTotalAmount;

    const totalMainBalance = document.getElementById('total-balance');
    const totalBalanceString = totalMainBalance.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    const currentTotalMainAmount = newDepositAmount + totalBalance;
    totalMainBalance.innerText = currentTotalMainAmount;

    depoAmount.value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const getWithdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = getWithdrawAmount.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const totalAmountOfWithdraw = document.getElementById('total-withdraw');
    const amountOfWithdraw = totalAmountOfWithdraw.innerText;
    const withdraw = parseFloat(amountOfWithdraw);

    const totalWithdraw = withdrawAmount + withdraw;
    totalAmountOfWithdraw.innerText = totalWithdraw;

    const totalMainBalance = document.getElementById('total-balance');
    const totalBalanceString = totalMainBalance.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    const currentTotalMainAmount = totalBalance - withdrawAmount;
    totalMainBalance.innerText = currentTotalMainAmount;

    getWithdrawAmount.value = ''
})


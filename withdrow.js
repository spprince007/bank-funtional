document.getElementById('withdrow-btn').addEventListener('click', function () {
    const newWithDrowAmount = inputFieldValue('withdrow-tk');

    const totalWithdrowAmount = previousValue('total-withdrow');

    const newWithdrowAmountTotal = totalWithdrowAmount + newWithDrowAmount;

    const totalwithdrow = setTextElementValueById('total-withdrow', newWithdrowAmountTotal);

    const preViousBlance = previousValue('previous-blance');

    const newBlance = preViousBlance - newWithDrowAmount;

    const totalBlance = setTextElementValueById('previous-blance', newBlance);

})
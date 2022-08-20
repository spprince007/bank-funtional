
document.getElementById('diposite-btn').addEventListener('click', function () {
    const newDepositeAmount = inputFieldValue('diposite-tk');

    const totalDepositeAmount = previousValue('total-deposite');

    const newDepositeTotal = totalDepositeAmount + newDepositeAmount;

    const totalDeposite = setTextElementValueById('total-deposite', newDepositeTotal);

    const preViousacBlance = previousValue('previous-blance');

    const newacBlance = preViousacBlance + newDepositeAmount;

    const totalBlance = setTextElementValueById('previous-blance', newacBlance);

})
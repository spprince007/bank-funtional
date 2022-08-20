function inputFieldValue(inputField) {
    const depositeTk = document.getElementById(inputField);
    const depositeTkInString = depositeTk.value;
    const depositeTkInFloat = parseFloat(depositeTkInString);
    depositeTk.value = '';
    return depositeTkInFloat;
}

function previousValue(textElement) {
    const oldDepositeTk = document.getElementById(textElement);
    const oldDepositeTkInString = oldDepositeTk.innerText;
    const oldDepositeTkInFloat = parseFloat(oldDepositeTkInString);
    oldDepositeTk.innerText = '';
    return oldDepositeTkInFloat;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}
let setTip = 0

const calculateTip = () => {
    const billTotal = document.getElementById('bill').value
    const peopleTotal = document.getElementById('people-total').value
    const perTip = document.getElementById('per-person-tip')
    const perPerson = document.getElementById('per-person-total')   

    let customTip = document.getElementById('custom-tip').value / 100
    let fixedTip = setTip
    let tip = customTip === 0 ? fixedTip : customTip

    const tipPerPerson = (billTotal * tip) / peopleTotal
    const totalPerPerson = (billTotal / peopleTotal) + tipPerPerson

    perTip.innerHTML = '$' + tipPerPerson.toFixed(2)
    perPerson.innerHTML = '$' + totalPerPerson.toFixed(2)
    setTip = 0
}

const getSetTip = (e) => {
    const button = e.target
    button.classList.toggle('button-active')
    setTip = e.target.value

    return setTip
}

const clearTotals = () => {
    document.getElementById('per-person-tip').textContent = ''
    document.getElementById('per-person-total').textContent = ''
}


document.getElementById('people-total').addEventListener('input', calculateTip)

document.querySelectorAll('.button:not([type="reset"])').forEach(item => {
    item.addEventListener('click', getSetTip)
})

document.getElementById('reset-button').addEventListener('click', clearTotals);
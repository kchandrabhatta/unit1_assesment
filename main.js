const value = document.getElementById('number');
const newNum = document.getElementById('input');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

plusBtn.addEventListener('click', (e) => {
    let valueTotal = parseInt(value.innerText) + parseInt(newNum.value);
    value.innerText = valueTotal;
    if (value.innerText < 0) {
        value.style.color = 'red'
    } else {
        value.style.color = 'black'
    }
    e.preventDefault();
});

minusBtn.addEventListener('click', (e) => {
    let valueTotal = parseInt(value.innerText) - parseInt(newNum.value);
    value.innerText = valueTotal;
    if (value.innerText < 0) {
        value.style.color = 'red'
    } else {
        value.style.color = 'black'
    }
    e.preventDefault();
});
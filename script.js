let num = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

num.innerHTML = 0;

function increaseByOne() {
    return num.innerHTML++;
}
function decreaseByOne() {
    return num.innerHTML--;
}
function returnToZero() {
    return num.innerHTML = 0;
}

increase.addEventListener('click', increaseByOne);
decrease.addEventListener('click', decreaseByOne);
reset.addEventListener('click', returnToZero);



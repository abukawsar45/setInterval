console.log(1111111111111);
console.log(2222222222222222222);
console.log(333333333333333);
let num = 0;
setInterval(() => {
    console.log(++num);
}, 1000);
console.log(5555555555555);
console.log(666666666666);
let num2 = 100;
const intervalId = setInterval(() => {
    console.log(num2++);
}, 2000);
document.getElementById('stop-btn').addEventListener('click' , function() {
    clearInterval(intervalId)
})
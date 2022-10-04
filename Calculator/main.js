let firstNum = document.querySelector('#firstNum');
let secondNum = document.querySelector('#secondNum');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let div = document.querySelector('#div');
let mul = document.querySelector('#mul');
let answers = document.querySelector('.answers');

let answerP = document.createElement('p');

plus.addEventListener('click' , function() {
    let plus = ( Number(firstNum.value) + Number(secondNum.value));
    answerP.innerHTML = plus;
    answers.append(answerP);
});

minus.addEventListener('click' , function() {
    let minus = ( firstNum.value - secondNum.value );
    answerP.innerHTML = minus;
    answers.append(answerP)
});

div.addEventListener('click' , function() {
    let div = ( firstNum.value / secondNum.value );
    answerP.innerHTML = div;
    answers.append(answerP)
});

mul.addEventListener('click' , function() {
    let mul = ( firstNum.value * secondNum.value );
    answerP.innerHTML = mul;
    answers.append(answerP)
});
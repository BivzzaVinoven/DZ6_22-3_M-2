//--1--//
let buttons = document.querySelectorAll('.btn');

buttons.forEach(function (d) {
    d.addEventListener('click', () => {
        console.log('yse i\'am button')
    })
})

//--2--//
let input = document.querySelector('.input')
let minus = document.querySelectorAll('.minus')
let plus = document.querySelectorAll('.plus')

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function () {
        input.value = +input.value + 1
    })
    minus[i].addEventListener('click', function () {
        input.value = (input.value > 1) ? (input.value -1) : (input.value -1)
    })
}

const container = document.getElementById('container')
const container_second = document.getElementById('container_second')
const container_3 = document.getElementById('container_3')
const container_4 = document.getElementById('container_4')
const next = document.querySelectorAll('.next')

function validate() {
    const mail = document.getElementById('text').value
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if (regx.text(mail)) {
        alert('Valid Email')
        return true
    }
    else {
        alert('Invalid Email')
        return false
    }
}



setTimeout(function () {
    // container_second.style.visibility = 'visible'
    container_second.style.animationName = 'pages'
    container_second.style.animationDuration = '1s'
    container_second.style.animationFillMode = 'forwards'
    container_second.style.animationIterationCount = '1'

    container.style.animationName = 'unsea'
    container.style.animationDuration = '1s'
    container.style.animationFillMode = 'forwards'
    container.style.animationIterationCount = '1'
}, 3 * 1000);

function next_button(next_button, first_button) {
    next_button.style.animationName = 'pages'
    next_button.style.animationDuration = '1s'
    next_button.style.animationFillMode = 'forwards'
    next_button.style.animationIterationCount = '1'

    first_button.style = ''
    first_button.style.left = '0'
    first_button.style.animationName = 'unsea'
    first_button.style.animationDuration = '1s'
    first_button.style.animationFillMode = 'forwards'
    first_button.style.animationIterationCount = '1'
}
let state = 1
next.forEach(function (el) {
    el.onclick = () => {
        if (state === 1) {
            next_button(container_3, container_second)
            state = 2
        }
        else if (state === 2) {
            next_button(container_4, container_3)
            state = 3
        }
        // else if (state === 3) {
        //     validate()
        //     state = 1
        // }
        // else {
        //     next_button() //следующая страница
        // }
    };
});



const container = document.getElementById('container')
const container_second = document.getElementById('container_second')
const container_3 = document.getElementById('container_3')
const container_4 = document.getElementById('container_4')
const next = document.querySelectorAll('.next')

var test = 1
function validate() {
    test = 1
    let mailAndPass = '';
    const mail = document.getElementById('text').value
    const box = document.querySelector('.input_container.email')
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    const password = document.getElementById('replace_pass').value
    const box_pass = document.querySelector('.input_container.password')
    var regx_pass = /(?=.*[a-z])(?=.*[0-9])/g

    let file = document.getElementById('file').files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function () {
        mailAndPass = reader.result.split(', ');
        console.log(mailAndPass)
        if (regx.test(mail)) {
            box.classList.remove('invalid_email')
        }
        else {
            box.classList.add('invalid_email')
            test = 0
        }
        if (regx_pass.test(password)) {
            box_pass.classList.remove('invalid_email')
        }
        else {
            box_pass.classList.add('invalid_email')
            test = 0
        }

        if ((test === 1) && (mailAndPass[0] === mail && mailAndPass[1] === password)) {
            location.href = 'second_page.html';
        }
    }
    reader.onerror = function () {
        alert(reader.error + "Не удалось загрузить страницу")
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

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

let container_first = document.querySelector('.container')
let container_del_first = document.querySelector('.container_second.del_first')
let container_del_second = document.querySelector('.container_second.del_second')

if (findGetParameter('param')) {
    container_first.classList.add('unsea')
    container_del_first.classList.add('unsea')
    container_del_second.classList.add('unsea')

    container_4.style.animationName = 'pages'
    container_4.style.animationDuration = '1s'
    container_4.style.animationFillMode = 'forwards'
    container_4.style.animationIterationCount = '1'
}

function validate() {
    const mail = document.getElementById('text').value
    const box = document.querySelector('.input_container.email.second')
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    const password = document.getElementById('replace_pass').value
    const box_pass = document.querySelector('.input_container.password')
    var regx_pass = /(?=.*[a-z])(?=.*[0-9])/g

    if (regx.test(mail)) {
        box.classList.remove('invalid_email')
    }
    else {
        box.classList.add('invalid_email')
    }
    if (regx_pass.test(password)) {
        box_pass.classList.remove('invalid_email')
    }
    else {
        box_pass.classList.add('invalid_email')
    }
}
function show_hide_password(target) {
    const input = document.getElementById('replace_pass')
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

let check_box = document.querySelectorAll('.chek_box_on_off')

if (check_box.checked) {
    check_box.classList.add('check_box_color')
}
else {
    check_box.classList.remove('check_box_color')
}
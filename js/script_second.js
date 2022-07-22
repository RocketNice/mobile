function validate() {
    const mail = document.getElementById('text').value
    const box = document.querySelector('.input_container.email.second')
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    const password = document.getElementById('replace_pass').value
    const box_pass = document.querySelector('.input_container.password')
    var regx_pass = /(?=.*[a-z])(?=.*[0-9])/g

    if (regx.test(mail)) {
        box.classList.remove('invalid_email')
        return true
    }
    else if (regx_pass.test(password)) {
        box_pass.classList.remove('invalid_email')
        return true
    }
    else {
        box_pass.classList.add('invalid_email')
        box.classList.add('invalid_email')
        return false
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


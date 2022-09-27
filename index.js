document.getElementById('login-btn').addEventListener('click', function () {
    const emailId = document.getElementById('mail-Check');
    const getMail = emailId.value;
    const passwordValue = document.getElementById('password-check');
    const password = passwordValue.value;
    if (getMail === 'jamilakter@gmail.com' && password === 'jamilakter') {
        window.location.href = "bank.html";
    } else {
        alert("invalid password or username");
    }
})



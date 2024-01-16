const input = document.querySelector(".input-field");
const inputIcon = document.querySelector(".input-icon");

inputIcon.addEventListener("click", (e) => {
    e.preventDefault();

    inputIcon.setAttribute(
        'src',
        input.getAttribute('type') === 'password' ? 'eye-ff.svg'
        :
        'eye.svg'
    );

    input.setAttribute(
        'type',
        input.getAttribute('type') === 'password' ?
        'text'
        :
        'password'
    );
})
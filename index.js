
const button = document.querySelector('.btn');
const p = document.querySelector('p');

button.addEventListener('click', () => {
    const answer = confirm('Вы точно хотите отменить 115 фз?');
    if (answer) {
        p.textContent = 'Отменено';
    } else {
        alert('Отменено пользователем');
    }
})


const form = document.getElementById('form-campos')
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const valorA = Number(campoA.value)
    const valorB = Number(campoB.value)

    if (valorB > valorA) {
        document.querySelector('.success-msg').style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        document.querySelector('.error-msg').style.display = 'block';
    }
})

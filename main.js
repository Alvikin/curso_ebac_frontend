const form = document.getElementById('form-nums');
let numEValido = false;

function validaNum (x, y){
    return x < y;
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const numeroX = Number(document.getElementById('nX').value);
    const numeroY = Number(document.getElementById('nY').value);

    const x = document.getElementById('nX');
    const y = document.getElementById('nY');

    const msgErro = `O número ${y.value} não é maior que o número ${x.value} :(`;
    const msgSucesso = `O número ${y.value} é maior que o número ${x.value} :)`;

    const containerSucesso = document.querySelector('.sucesso');
    const containerErro = document.querySelector('.erro');

    numEValido = validaNum(numeroX, numeroY);

    if(numEValido){
        containerSucesso.innerHTML = msgSucesso;
        containerSucesso.style.display = 'block';

        containerErro.style.display = 'none';

        x.value = '';
        y.value = '';
    }else{
        containerErro.innerHTML = msgErro;
        containerErro.style.display = 'block';

        containerSucesso.style.display = 'none';

        x.style.border = '1px solid red'
        y.value = '';
    }
});



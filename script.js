let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function chute(){
    let chute = Number(document.getElementById('numeroChute').value);
    let resultado = document.getElementById('resultado');

    let message;
    if(chute > numeroAleatorio){
        message = 'O número é menor';
    }
    if(chute < numeroAleatorio){
        message = 'O número é maior';
    }

    if(chute === numeroAleatorio){
        resultado.textContent = 'Parabéns! Você acertou';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = message;
        resultado.style.color = 'red';
    }    
}

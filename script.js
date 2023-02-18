const API = 'https://api.adviceslip.com/advice';
const ADVICE_TITLE = document.querySelector('.advice-title');
const ADVICE_BODY = document.querySelector('.advice-body');
const NEW_ADVICE = document.getElementById('new-advice');


//Petición a la API para los consejos
async function newAdvice() {
    const res = await fetch(API);
    const resJson = await res.json();
    ADVICE_TITLE.innerHTML =`ADVICE #${resJson.slip.id}`;
    ADVICE_BODY.innerHTML = resJson.slip.advice;
}


//Inicializamos el programa con un consejo aleatorio
newAdvice();


//Nuevo consejo cuando apretamos el dado
NEW_ADVICE.addEventListener('click', e => {
    newAdvice();
    e.preventDefault();
})
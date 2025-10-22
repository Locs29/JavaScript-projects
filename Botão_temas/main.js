const MudarTema = document.getElementById('botao-tema');
const body = document.body;

MudarTema.addEventListener('click', () => {
    body.classList.toggle('tema-escuro');
});
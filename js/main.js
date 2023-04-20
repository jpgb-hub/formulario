let form =document.querySelector('contactForm');

form.addEventListener('submit', validaFormulario);
function validaFormulario(evento){
    evento.preventDeFault();
    let nombre = document.form['ContactForm']['nombre'].value;
    let email = document.form['ContactForm']['email'].value;
    let mensaje = document.form['ContactForm']['mensaje'].value;

    let valido = true;
    



}
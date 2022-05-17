function validacionNombre(inputNombre, pErrorNombre){
    let expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{2,20}$/;

    let nombre = inputNombre.value;

    if(expresionRegularNombre.test(nombre)){
        inputNombre.classList.remove('input-gap-incorrecto');
        inputNombre.classList.add('input-gap-correcto');
        pErrorNombre.classList.remove('error-nombre-activo');
    }
    else{
        inputNombre.classList.remove('input-gap-correcto');
        inputNombre.classList.add('input-gap-incorrecto');
        pErrorNombre.classList.add('error-nombre-activo');
    }
}


function validacionEmail(inputEmail, pErrorEmail){
    let expresionRegularEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    let email = inputEmail.value;

    if(expresionRegularEmail.test(email)){
        inputEmail.classList.remove('input-gap-incorrecto');
        inputEmail.classList.add('input-gap-correcto');
        pErrorEmail.classList.remove('error-email-activo');
    }
    else{
        inputEmail.classList.remove('input-gap-correcto');
        inputEmail.classList.add('input-gap-incorrecto');
        pErrorEmail.classList.add('error-email-activo');
    }
}

function validacionConsulta(inputConsulta, pErrorConsulta) {
    if (inputConsulta.value == ''){
        inputConsulta.classList.add('input-gap-incorrecto');
        pErrorConsulta.classList.add('error-textarea-activo');
        inputConsulta.classList.remove('input-gap-correcto')
        
    }
    else{
        inputConsulta.classList.remove('input-gap-incorrecto');
        inputConsulta.classList.add('input-gap-correcto');
        pErrorConsulta.classList.remove('error-textarea-activo');
    }
}




let validarFormulario = document.getElementById('validForm');

validarFormulario.addEventListener('click', function(e) {
    e.preventDefault();

    let inputNombre = document.getElementById('nombreRemitente');

    let inputEmail = document.getElementById('emailRemitente');

    let inputConsulta = document.getElementById('consulta');

    let pErrorNombre = document.querySelector('.error-nombre');

    let pErrorEmail = document.querySelector('.error-email');

    let pErrorConsulta = document.querySelector('.error-textarea');
   

// Validacion de nombre    
    validacionNombre(inputNombre, pErrorNombre);

// Validacion de mail
    validacionEmail(inputEmail, pErrorEmail);


// Validacion de textarea
    validacionConsulta(inputConsulta, pErrorConsulta);


} )
$(document).ready(function($) {
    $('.tour').on(
        'submit',
        function(e){
            e.preventDefault();
            var nombre = $('.nombre .apellido').val();

            var apellido = $('.nombre .apellido').val();

            var 
            console.log(password, email);
            if(!email) {
                alert('Debe ingresar un correo');
             }
            else if(!password){
                alert('Debe ingresar una contrasena');
            }
            else {
                firebase
                .auth()
                .then(function(){
                    location.href='asignartour.html';
                })
                .catch(function(error) {
                    alert('No eres bienvenido');
                });
            }
        }
        );
})
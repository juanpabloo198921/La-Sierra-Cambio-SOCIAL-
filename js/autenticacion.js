$(document).ready(function($) {
    $('.login').on(
        'submit',
        function(e){
            e.preventDefault();
            var email = $('.login .email').val();

            var password = $('.login .password').val();
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
                .signInWithEmailAndPassword(email, password)
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
    $('#enviar').click(
        'submit',
        function autenticacion(e){
            e.preventDefault();
            var email = $('.registro .email').val();
            var password = $('.registro .password').val();
            if(!email) {
                alert('Debe ingresar un correo');
            }
            else if(!password){
                alert('Debe ingresar una contrasena');
            }
            else {

                firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(function(){
                     location.href='asignartour.html';
                    console.log(email);
                })
                .catch(function(error) {
                    alert('Debes intentarlo de nuevo');
                    
                });
            };
        }
        );


                $('#boton').click(function(){

    $('#texto').text('agregando texto');

});


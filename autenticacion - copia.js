jQuery(document).ready(function($){
    $('.registro').on(
        'submit',
        function(e){
            e.preventDefault(); 

            var email = $('.registro .email').val();
            var password = $('.registro .password').val();
            

            if(!email){
                alert('debe ingresar un correo');
            } 
            else if(!password) {
                alert('debe de ingresar una contraseña');
            }
            else{
                firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(function(){
                    alert('Bienvenido')
                })
                .catch(function(error){
                    alert('No eres bienvenido')
                });
            }
        });
});


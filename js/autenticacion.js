var config = {
    apiKey: "AIzaSyAw3THBR3n9vPzYhEH0vODRVlYFwe8UUfE",
    authDomain: "la-sierra-cambio-social.firebaseapp.com",
    databaseURL: "https://la-sierra-cambio-social.firebaseio.com",
    projectId: "la-sierra-cambio-social",
    storageBucket: "la-sierra-cambio-social.appspot.com",
    messagingSenderId: "129241450571"
  };
  firebase.initializeApp(config);

  const database = firebase.database();


(document).ready(function($) {
    $('.login').on(
        'submit',
        function(e){
            e.preventDefault();
            var email = $('.login .email').val();

            var password = $('.login .password').val();
            if(!email) {
                alert('Debe ingresar un correo');
            }
            else if(!password){
                alert('Debe ingresar una contrasena');
            }
            else {
                database
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(function(){
                    alert('Bienvenido');
                })
                .catch(function(error) {
                    alert('No eres bienvenido');
                });
            }
        }
        );
    $('.registro').on(
        'submit',
        function(e){
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

                database
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(function(){
                    alert('Creaste un nuevo usuario');
                    console.log(email);
                })
                .catch(function(error) {
                    alert('Debes intentarlo de nuevo');
                    
                });
            };
        }
        );
});


jQuery(document).ready(function($) {
    $('#tour').click(
        'submit',
        function(e){
            e.preventDefault();
            var nombre = $('.registro #nombre').val();

            var apellido = $('.registro #apellido').val();

            var email = $('.registro #email').val();

            var telefono = $('.registro #telefono').val();

            var nacionalidad = $('.registro #nacionalidad').val();

            var recorrido = $('.registro #recorrido').val();


            if(!nombre) {
                alert('Debe ingresar un nombre');
            }else if(!apellido){
                alert('Debe ingresar un apellido');
            }else if(!email){
                alert('Debe ingresar un email');
            }else if(!telefono){
                alert('Debe ingresar un telefono');

            }else if (nacionalidad == 'Selecciona la nacionalidad') {
                alert('Debe Seleccionar una nacionalidad');
            }else if (recorrido == 'Selecciona el recorrido') {
                alert(" Debe Seleccionar el recorrido");
            }
             else {
                var user_info = {
                    nombre:$('.registro #nombre').val(),
                    apellido:$('.registro #apellido').val(),
                    email:$('.registro #email').val(),
                    telefono:$('.registro #telefono').val(),
                    nacionalidad:$('.registro #nacionalidad').val(),
                    recorrido:$('.registro #recorrido').val(),
              
                
                };
                firebase.database().ref('user_info').push(user_info);
                alert('guardado con exito');
                location.href="index.html"
            }

        });
})
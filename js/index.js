$(document).ready(function(){
  var i = 0;

  $('#boton-agregar').on('click',function(){
    console.log("boton agregar");
    i++;
    $('#contador').append('<p>'+i+'</p>');
  });

  $('#agregar').click(function(){
    $('body').append('<p>Hola</p>');
  });

});
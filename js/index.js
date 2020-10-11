$(document).ready(function(){
  var i = 0;
  var acum = 0;
  const miArray = [];
  $('#boton-agregar').on('click',function(){
    console.log("boton agregar");
    i++;
    $('#contador').html('<p>Cantidad de vehículos: '+i+'</p>');

    $('entradaAntiguedad').each(function(){
      miArray.push(this);
      console.log();
    })
   
    
  });
  
  $('#promedio').on('click',function(){
    var suma =0;
    var resultado;
    for( i=0;i<miArray.length;i++){
      suma= suma+miArray[i];
    }
    
    resultado= suma/miArray.length;
    $('#contador').append('<p>Promedio total: '+resultado+'</p>');
    
  });


});


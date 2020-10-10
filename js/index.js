$(document).ready(function(){

    $("#vehiculo").click(function(){
        
      var auto = prompt('Ingresar vehículo');
      
      var autos = 0;
      var acumuladorAños = 0;

      

  while(auto){
    autos++;
    $("body").append("<p>"+auto+"</p>");
    var años = parseInt(prompt('Ingresar antigüedad'));
    acumuladorAños += años;
    if(pagaPatente(años, 10))
    {
      alert('Paga patente');
    }
    else{
      alert('No paga patente');
    }
    
    auto = prompt('Ingresar vehículo');
  }
  if(autos>0){
    var promedio = acumuladorAños/autos;
    $("body").append("<div><h2>Promedio total: "+promedio+"</h2></div>");
  }
  
  mostrarPromedioVehiculos(autos, acumuladorAños);
  });
 
  function pagaPatente(antiguedad, limiteAños){
	return antiguedad < limiteAños;
}

function mostrarPromedioVehiculos(cantidadAutos, añosTotales){
	if(cantidadAutos > 0){
  	resultado = añosTotales / cantidadAutos;
    alert('El promedio de antigüedad es: ' + resultado);
  }
	else{
  	alert('No se ingresaron vehículos');
  }
}

});






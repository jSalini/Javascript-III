// //Clase I

// let nombre= "Jonathan";
// let	apellido= "Salini";
// let nombreCompleto = nombre + " " + apellido;

// // Rendimiento  ufas mes 1
//   var auto1 = 500;
//   let vida1 = 600;
//   let hogar1 = 20;
//   let salud1 = 10;

//   let suma1 = auto1 + vida1 +hogar1 + salud1;
//   console.log("La suma total de Ufas es:" + suma1);


// // Rendimiento ufas mes 2
//   var auto2 = 400;
//   let vida2 = 100;
//   let hogar2 = 100;
//   let salud2 = 100;

//   let suma2 = auto2 + vida2 +hogar2 + salud2;
//   console.log("La suma total de Ufas es:" + suma2);

// // Rendimiento ufas mes 3
//   var auto3 = 400;
//   let vida3 = 50;
//   let hogar3 = 50;
//   let salud3 = 100;

//   let suma3 = auto3 + vida3 +hogar3 + salud3;
//   console.log("La suma total de Ufas es:" + suma3);

// //mensajes

//    console.log("Bienvenidos al muro comercial");
//    console.log("El nombre completo del usuario es: "+nombreCompleto); 
//    alert("Bienvenidos al muro comercial")	

//    let nombreIngresado = prompt("Ingrese su nombre");
//    alert("Bienvenid@s, estas a pasos de visualizar tu rendimiento " + nombreIngresado);


// // Clase II

// // Condiciones anidadas

// // Aca se pregunta la meta que posee cada ejecutivo al vender mas de un producto a un mismo cliente.

// let metaCruce = parseInt(prompt("¿Cual es el % de tu meta en cruce de productos? (Ingresa solo numeros)"));	

// if (metaCruce == 20) {
//    console.log("Excelente conoces tu meta en cruce, estas listo para lograr tus objetivos");
// } else if (metaCruce < 20) {
//    console.log("Te faltaron puntos porcentuales, tu meta es del 20% en cruce"); 
// }else {
//    console.log("te pasaste, tu meta es del 20% en cruce");
// }

// // Variables Booleans

//   let cumplimientoTotal = parseInt(prompt("Ingrese su cumplimiento final total Ufas porcentual (%) (digite solo numeros)"));
//   let cumplimientoMayor = (cumplimientoTotal > 99);
//   console.log("Su cumplimiento es mayor qué: " + cumplimientoMayor);
//   if (cumplimientoMayor) {
//      alert("Usted logra el rendimiento esperado");
//   } else {
//      alert("Usted no cumple el rendimiento esperado, vamos a trabajar juntos para lograr objetivos");  
//   }

// // Operador logico

// let masImportante = prompt("¿Que es lo mas importante para nosotros?");
//   if ((masImportante == "clientes") || (masImportante == "Clientes")|| (masImportante == "CLIENTES") || (masImportante == "LOS CLIENTES") || (masImportante == "los clientes") || (masImportante == "Los Clientes") || (masImportante =="Los clientes")){
//   console.log("Respuesta correcta");
// } else {
//   console.log("Respuesta incorrecta, son los: Clientes");
//   }   

// //combinacion de operadores

// let nombreUsuarioPermitido = prompt ("Ingresa nombre del usuario con acceso permitido");
// if ((nombreUsuarioPermitido != "") && (((nombreUsuarioPermitido == "Jonathan") || (nombreUsuarioPermitido == "jonathan") || (nombreUsuarioPermitido == "JONATHAN")))){
//   alert("Usuario Permitido");

// }else{
//   alert("Usuario no permitido, esto se autodestruira en 5 segunos");
// }

//..............................................................//

//CLASE III

// ciclo por conteo for: 

for(let i = 1; i<=10; i++){
    console.log("Conteo nro " +i);
} 

//Ejercicio tabla de multiplicar

let ingresarNumero = parseInt(prompt("Ingresar Numero a calcular"));

     // aca van las repeticiones a multiplicar

for (let i = 1; i <=10; i++){
     let resultado = ingresarNumero * i;
     console.log(ingresarNumero + " x " + i + " = " + resultado); 
}

//Ejemplo de turnos

     // Aca asiganos la cantidad de turnos
let cantTurnos = parseInt (prompt ("Ingresar la cantidad de turnos de ejecutivos para el mes"));
for (let i = 1; i <= cantTurnos; i++){
     
     // En las repeticiones solicitud de nombre
     let  ingresarNombre= prompt("Ingresa el nombre del ejecutivo");

     //Aca se informa el turno asignado usando N° repetición (i)
     console.log(" Turno N° " + i + " Nombre: " + ingresarNombre);
}

//Ejemplo break (para cortar y no seguir preguntando lo mismo)

for(let i=1;i<=3;i++){
    let contrasenia=prompt("Ingresa contraseña:");
    if(contrasenia==="coderhouse"){
       alert("Bienvenidos a la plataforma comercial");
       break;
    }else{
       alert("Contraseña incorrecta");
    }
}

//Ejemplo Ciclo While

let sucursal = prompt("Ingrese su sucursal: (sucursal oeste)");
     while (sucursal != "oeste") {
          alert("La sucursal es: " + sucursal);
          sucursal = prompt("Ingrese otra sucursal: (sucursal oeste)");
}

//ciclo do while

let función;
do {
    función = prompt("Ingrese su función (función ejecutivo para salir)");
    alert("función ingresada: " + función);
    if (función == "ejecutivo"){
       alert("Función ingresada correctamente");
    } else{
       alert("Función ingresada erroneamente"); 
    }
} while (función != "ejecutivo");

// //Ejercicio practico de la clase

// //Crear un algoritmo que permita calcular el promedio  de notas  de un curso
// //opcion 1: sabiendo la cantidad exacta de alumnos
// //opcion 2: desconociendo la cantidad de alumnos

// //opcion I

// let sumatoria = 0;
// for (let i = 1; i <= 5; i++) {
//      let nota = parseInt(prompt("Ingrese la nota del alumno " + i));
//      sumatoria = sumatoria + nota;
//    }
//    let promedio = sumatoria / 5;
//    alert("El promedio de las notas es: " + promedio);

// //opcion II 

// let sumatoriaTotal = 0;
// let contadorAlumnos = 0;
// let notaAlumno = parseInt(prompt("Ingrese la nota del alumno (0-para salir)"));
// while (notaAlumno != 0) {
//      contadorAlumnos = contadorAlumnos + 1;
//      sumatoriaTotal = sumatoriaTotal + notaAlumno;
//      notaAlumno = parseInt(prompt("Ingrese la nota del alumno (0-para salir)"));
// }
//    let promedioFinal = sumatoriaTotal / contadorAlumnos
//    alert("El promedio de las notas es: " + promedioFinal);

//Condicional switch

let meta =prompt("Ingresa KPI y le dire cual es su meta");
while (meta != "salir"){
     switch (meta){
       case "ufas":
          alert("Su meta en ufas es de 850");
          break;
       case "cruce":
          alert("Su meta en cruce es de 20%");
          break;
       case "nps venta":
           alert("Su meta NPS venta es de 75%");
           break;
  }
  meta = prompt("Consulte la meta de su KPI y le dire cual es");
}



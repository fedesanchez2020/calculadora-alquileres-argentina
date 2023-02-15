// function busquedaIndice(obtenerFecha1()) {
//     let result = " ";

//     var fechas = {
//         "A202211": 1.72,
//       "A202212": 1.73
//     };
//     console.log(fechas[result]);
// }







// let fechaInicio;
// let fechaInicioObtenida;
// let fechaRenovacion;
// let fechaRenovacionObtenida;
// let precioAlquiler;

function obtenerDatos() {
    var fechaInicio = document.getElementById('date1').value;
    var fechaInicioObtenida = "A" + fechaInicio;

    let fechaRenovacion = document.getElementById('date2').value;
    let fechaRenovacionObtenida = "A" + fechaRenovacion;
    
    let precioAlquiler = document.getElementById('price1').value;
    
    
    console.log(fechaRenovacionObtenida);
    console.log(precioAlquiler);
    
}

console.log(obtenerDatos());


//busquedaIndice(obtenerFecha1);
// function phoneticLookup(val) {
//     let result = "";
  
//     var lookup = {
//       "alpha": "Adams",
//       "bravo": "Boston",
//       "charlie": "Chicago",
//       "delta": "Denver",
//       "echo": "Easy",
//       "foxtrot": "Frank"
//     };
   
//    //return result;
//   console.log(lookup[val]); 
//   }
  
//   phoneticLookup("alpha");

//OTRA SOLUCION
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
//   // do not change code above this line
  
//   function checkInventory(scannedItem) {
//     // change code below this line
//     return foods[scannedItem];
//   }
  
//   // change code below this line to test different cases:
//   console.log(checkInventory("apples"));














//return (precio1 / icl1) * icl2;


    
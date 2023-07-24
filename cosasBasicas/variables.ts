var nombre1:string = "Pepe"
console.log("Nombre1: " + nombre1)
var nombre2:string //el valor se setea a undefined
//console.log("nombre2 sin valor: " + nombre2)
//llora si quiero usar la variable antes de asignarla... y ni compila xD
nombre2 = "TS bobo"
console.log("nombre2: " + nombre2)
var nombre3 = "Un nombre cualquiera"
//y para que me pide el tipo si lo puede inferir? xD
console.log("nombre3: " + nombre3)
var nombre4 //es de tipo any y su valor undefined
console.log("nombre4: " + nombre4) //y este porque no llora? xD
nombre4 = "Llamate como quieras..."
console.log("nombre4: " + nombre4)
var numerito:number = 5.2 //ok, number para ints y floats xD
console.log("numerito:" + numerito)
//mira mira esta porqueria de type assertion jajaja:
var numerito2:string = <string> <any> 3
console.log("numerito2 de tipo: " + typeof(numerito2))//es number, un exito xD

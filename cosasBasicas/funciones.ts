/* Esto explota porque ts no sabe que hacer con los argumentos opcionales y los default 
en la misma definición de una función */
function print_detalles(id:number,se_come:boolean,mail?:string,nombre:string="Anita"){
    console.log("ID: " + id)
    console.log("Nombre: " + nombre)
    if(mail!=undefined)
        console.log("Mail: " + mail)
    if(se_come)
        console.log("Es comestible.")
    else
        console.log("No es comestible.")
}

print_detalles(1,true,"Pepe@pepe.com","Pepe")
print_detalles(2,false,"Juan")
print_detalles(3,false,"hola@algo.com")

function suma(...numeros:number[]){
    let suma:number = 0
    for(let i:number = 0; i < numeros.length; i++){
        suma += numeros[i]
    }
    console.log("La suma es: " + suma)
}

suma(2,5)
suma(1,2,3,4,5,6,7,8,9)
suma(20,30,50)
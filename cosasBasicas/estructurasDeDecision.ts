//if:
if(true){
    console.log("en el if = true")
}

//if...else:
if(false){
    console.log("ni entres...")
} else {
    console.log("en el else porque el if era false")
}

//ifs anidados:
if(true){
    if(true){
        console.log("if true, if true")
    }
}

//switch:
let a = 2
//sin los breaks sigue con lo que siga al caso que sea
switch(a){
    case 1: console.log(1)
        break
    case 2: console.log(2)
        break
    default: console.log("default")
}
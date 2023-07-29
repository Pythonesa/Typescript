for(let i:number = 0; i < 5; i++){
    console.log(i)
}

let a:Array<number> = [1,2,3];
let j:any;
for(j in a){
    console.log(a[j])
}

let x = 0;
while(x < 5){
    console.log(x)
    x++
}

do{
    console.log(x)
    x++
    if(x == 6){
        continue
    }
    else if(x == 9){
        break
    }
    console.log("fin del do while")
}while(x < 10)

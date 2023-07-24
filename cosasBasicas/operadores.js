//Aritmeticos:
var suma = 2 + 3;
console.log("2 + 3 = " + suma);
var resta = 5 - 2;
console.log("5 - 2 = " + resta);
var multiplicacion = 3 * 2;
console.log("3 * 2 = " + multiplicacion);
var division = 4 / 2;
console.log("4 / 2 = " + division);
var modulo = 9 % 2;
console.log("9 % 2 = " + modulo);
var incremento = 5;
incremento++;
console.log("5++ = " + incremento);
var decremento = 2;
decremento--;
console.log("2-- = " + decremento);
//Relacionales:
var a = 10;
var b = 5;
var c = 5;
console.log("a = " + a + ", b = " + b + " y c = " + c);
console.log("a > b = " + (a > b));
console.log("a < b = " + (a < b));
console.log("b >= c = " + (b >= c));
console.log("a <= b = " + (a <= b));
console.log("b == c = " + (b == c));
console.log("a != b = " + (a != b));
//Lógicos:
console.log("true && false = " + (true && false));
console.log("true || false = " + (true || false));
console.log("!false = " + (!false));
//Bitwise:
a = 2;
b = 3;
console.log("a = " + a + " y b = " + b);
console.log("AND: a & b = " + (a & b)); //2
console.log("OR: a | b = " + (a | b)); //3
console.log("XOR: a ^ b = " + (a ^ b)); //1
console.log("NOT: ~a = " + (~a)); //-3
console.log("left shift: a << 1 = " + (a << 1)); //4
console.log("right shift: a >> 1 = " + (a >> 1)); //1 
console.log("right shift con cero: a >>> 1 = " + (a >>> 1)); //1
//Asignación: ni lo voy a probar, +=, -=, *=, /=... los de siempre digo yo xD
var num = 6;
console.log(num + " += 1 = " + (num += 1));
console.log(num + " -= 1 = " + (num -= 1));
console.log(num + " *= 2 = " + (num *= 2));
console.log(num + " /= 2 = " + (num /= 2));
//Negación:
var x = 4;
var y = -x;
console.log("negación de " + x + " = " + y);
//Condicional:
var positivo = 2;
var negativo = -2;
var res1 = positivo > 0 ? "positivo" : "negativo"; //positivo
console.log(res1);
var res2 = negativo > 0 ? "positivo" : "negativo"; //negativo
console.log(res2);
//Relacionados a tipos: typeof e instanceof

var message = "Hola mundo cruel!";
//Comentario de una línea con mala actitud!
console.log(message);
console.log("Odio TypeScript!");
/*  De verdad,
    lo ODIO,
    lo odio mucho!
*/
var Saludito = /** @class */ (function () {
    function Saludito() {
    }
    Saludito.prototype.saludo = function () {
        console.log("Le mando un saludo a Python porque lo extraño mucho!");
    };
    return Saludito;
}());
var cosoSaludon = new Saludito();
cosoSaludon.saludo();

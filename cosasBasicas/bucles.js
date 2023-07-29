for (var i = 0; i < 5; i++) {
    console.log(i);
}
var a = [1, 2, 3];
var j;
for (j in a) {
    console.log(a[j]);
}
var x = 0;
while (x < 5) {
    console.log(x);
    x++;
}
do {
    console.log(x);
    x++;
    if (x == 6) {
        continue;
    }
    else if (x == 9) {
        break;
    }
    console.log("fin del do while");
} while (x < 10);

function changeColor() {
    if (document.getElementById("myDiv").style.backgroundColor == "rgb(12, 141, 29)") {
        document.getElementById("myDiv").style.backgroundColor = "rgb(144, 5, 5)";
    } else {
        document.getElementById("myDiv").style.background = "rgb(12, 141, 29)";
    }
}

function changeText() {
    var id = document.getElementsByName("button")[0].id;
    if(id == 1) {
        document.getElementById("demo").innerHTML = "Zmieniony tekst";
        document.getElementsByName("button")[0].id = 0;
    } else {
        document.getElementById("demo").innerHTML = "Zmiana tekstu przyciskiem";
        document.getElementsByName("button")[0].id = 1;
    }
}

function changeFontsize() {
    if (document.getElementById("par").style.fontSize == "50px") {
        document.getElementById("par").style.fontSize = "30px";
    } else {
        document.getElementById("par").style.fontSize = "50px";
    }
}

function changeDisplay() {
    if (document.getElementById("gif").style.display == "block") {
        document.getElementById("gif").style.display = "none";
    } else {
        document.getElementById("gif").style.display = "block";
    }
}

var x, y, z;
x = 5;
y = 6;
z = x + y;
document.getElementById("suma").innerHTML = "x + y = " + z * 10;

window.alert("You can do it!");

const liczba1 = 19;
const liczba2 = 6;
let total = liczba1 - liczba2;
document.getElementById("total").innerHTML = "l1 - l2 = " + total;

let a = "Robię" + " " + "rzeczy!";
document.getElementById("napis").innerHTML = a;

let b = "7" + 3 + 1;
document.getElementById("var").innerHTML = b;
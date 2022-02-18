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

document.getElementById("suma").innerHTML = 5 + 6;

window.alert("You can do it!");
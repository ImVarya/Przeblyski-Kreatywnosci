function changeColor(){
    if (document.getElementById("myDiv").style.backgroundColor == "rgb(144, 5, 5)") {
        document.getElementById("myDiv").style.backgroundColor = "rgb(12, 141, 29)";
    } else {
        document.getElementById("myDiv").style.background = "rgb(144, 5, 5)";
    }
}

function changeText() {
    var id = document.getElementsByName("button")[0].id;
    if(id == 1) {
        document.getElementById("demo").innerHTML = "Zmiana tekstu przyciskiem";
        document.getElementsByName("button")[0].id = 0;
    } else {
        document.getElementById("demo").innerHTML = "Zmieniony tekst";
        document.getElementsByName("button")[0].id = 1;
    }
}
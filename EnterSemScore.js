
function clickfunction() {

    var a = document.getElementById("sema").value;
    var b = document.getElementById("semb").value;
    var c = document.getElementById("semc").value;
    var d = document.getElementById("semd").value;
    var e = document.getElementById("seme").value;
    var f = document.getElementById("semf").value;
    var g = document.getElementById("semg").value;
    var h = document.getElementById("semh").value;

    var numofsem = document.getElementById("numberofsem").value;
    var queryString = "?sema=" + a + "&semb=" + b + "&semc=" + c + "&semd=" + d + "&seme=" + e + "&semf=" + f + "&semg=" + g + "&semh=" + h + "&noofsem=" + numofsem;
    window.open("./Resultpage.html" + queryString);

}

window.addEventListener("load", function () {




    const params = (new URL(document.location)).searchParams;
    const semres = params.get('sem');
    document.getElementById("numberofsem").value = semres;
    if (semres < 1) {
        document.getElementById("CalCulate").style.visibility = "hidden";
        document.getElementById("1stl").innerHTML = "ENTER VALID NUMBER";
        document.getElementById("sema").style.visibility = "hidden";
        document.getElementById("sem2").style.visibility = "hidden";
        document.getElementById("sem3").style.visibility = "hidden";
        document.getElementById("sem4").style.visibility = "hidden";
        document.getElementById("sem5").style.visibility = "hidden";
        document.getElementById("sem6").style.visibility = "hidden";
        document.getElementById("sem7").style.visibility = "hidden";
        document.getElementById("sem8").style.visibility = "hidden";

    }

    else if (semres == 1) {
        document.getElementById("sem2").style.visibility = "hidden";
        document.getElementById("sem3").style.visibility = "hidden";
        document.getElementById("sem4").style.visibility = "hidden";
        document.getElementById("sem5").style.visibility = "hidden";
        document.getElementById("sem6").style.visibility = "hidden";
        document.getElementById("sem7").style.visibility = "hidden";
        document.getElementById("sem8").style.visibility = "hidden";




    }
    else if (semres == 2) {
        document.getElementById("sem3").style.visibility = "hidden";
        document.getElementById("sem4").style.visibility = "hidden";
        document.getElementById("sem5").style.visibility = "hidden";
        document.getElementById("sem6").style.visibility = "hidden";
        document.getElementById("sem7").style.visibility = "hidden";
        document.getElementById("sem8").style.visibility = "hidden";

    }
    else if (semres == 3) {

        document.getElementById("sem4").style.visibility = "hidden";
        document.getElementById("sem5").style.visibility = "hidden";
        document.getElementById("sem6").style.visibility = "hidden";
        document.getElementById("sem7").style.visibility = "hidden";
        document.getElementById("sem8").style.visibility = "hidden";

    }
    else if (semres == 4) {

        document.getElementById("sem5").style.visibility = "hidden";
        document.getElementById("sem6").style.visibility = "hidden";
        document.getElementById("sem7").style.visibility = "hidden";
        document.getElementById("sem8").style.visibility = "hidden";

    }
    else if (semres == 5) {
        document.getElementById("sem6").style.visibility = "hidden";
        document.getElementById("sem7").style.visibility = "hidden";
        document.getElementById("sem8").style.visibility = "hidden";

    }
    else if (semres == 6) {
        document.getElementById("sem7").style.visibility = "hidden";
        document.getElementById("sem8").style.visibility = "hidden";

    }
    else if (semres == 7) {
        document.getElementById("sem8").style.visibility = "hidden";

    }
    else if (semres == 8) {
        document.getElementById("nmofsem").innerHTML = "Thank You";

    }
    else {
        document.getElementById("sem1").style.visibility = "hidden";
        document.getElementById("sem2").style.visibility = "hidden";
        document.getElementById("sem3").style.visibility = "hidden";
        document.getElementById("sem4").style.visibility = "hidden";
        document.getElementById("sem5").style.visibility = "hidden";
        document.getElementById("sem6").style.visibility = "hidden";
        document.getElementById("sem7").style.visibility = "hidden";
        document.getElementById("sem8").style.visibility = "hidden";
        document.getElementById("nmofsem").innerHTML = "Enter Value Upto 8";

    }
});

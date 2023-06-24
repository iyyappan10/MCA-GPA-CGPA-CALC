function clickfun() {
    var a = document.getElementById("sem").value;
    document.getElementById("kk").innerHTML = a;


    if (a == 0) {
        alert("PLEASE ENTER NUMBER OF SEMESTER");
    }
    else if (a <= 8) {
        alert("You have choose No. of sem : " + a);
        var queryString = "?sem=" + a;


        window.open("./EnterSemScore.html" + queryString);
        document.getElementById("kk").innerHTML = "";

    }
    else {

        alert("PLEASE ENTER NUMBER OF SEMESTER UPTO 8");
        document.getElementById("sem").value = "";
        document.getElementById("kk").innerHTML = "";

    }


}
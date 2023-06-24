window.addEventListener("load", function () {
    var params = (new URL(document.location)).searchParams;
    var res1 = params.get('sema');
    resa = parseFloat(res1);
    var res2 = params.get('semb');
    resb = parseFloat(res2);
    var res3 = params.get('semc');
    resc = parseFloat(res3);
    var res4 = params.get('semd');
    resd = parseFloat(res4);
    var res5 = params.get('seme');
    rese = parseFloat(res5);
    var res6 = params.get('semf');
    resf = parseFloat(res6);
    var res7 = params.get('semg');
    resg = parseFloat(res7);
    var res8 = params.get('semh');
    resh = parseFloat(res8);
    var semnum = params.get('noofsem');
    semnum = parseInt(semnum);
    if (semnum == 1) {
        document.getElementById("result").innerHTML = "YOUR AVERAGE RESULT : " + resa;
        document.getElementById("Percentage").innerHTML = "YOUR PERCENTAGE : " + ((resa * 10).toFixed(0)) + '%';


    }
    else if (semnum == 2) {

        var sem2th = (resa + resb) / 2;
        document.getElementById("result").innerHTML = "YOUR AVERAGE RESULT : " + sem2th.toFixed(2);
        document.getElementById("Percentage").innerHTML = "YOUR PERCENTAGE : " + ((sem2t * 10).toFixed(0)) + '%';

    }
    else if (semnum == 3) {

        var sem3th = (resa + resb + resc) / 3;
        document.getElementById("result").innerHTML = "YOUR AVERAGE RESULT : " + sem3th.toFixed(2);
        document.getElementById("Percentage").innerHTML = "YOUR PERCENTAGE : " + ((sem3t * 10).toFixed(0)) + '%';
    }
    else if (semnum == 4) {
        var sem4th = (resa + resb + resc + resd) / 4;
        document.getElementById("result").innerHTML = "YOUR AVERAGE RESULT : " + sem4th.toFixed(2);
        document.getElementById("Percentage").innerHTML = "YOUR PERCENTAGE : " + ((sem4th * 10).toFixed(0)) + '%';


    }
    else if (semnum == 5) {
        var sem5th = (resa + resb + resc + resd + rese) / 5;
        document.getElementById("result").innerHTML = "YOUR AVERAGE RESULT : " + sem5th.toFixed(2);
        document.getElementById("Percentage").innerHTML = "YOUR PERCENTAGE : " + ((sem5th * 10).toFixed(0)) + '%';
    }
    else if (semnum == 6) {
        var sem6th = (resa + resb + resc + resd + rese + resf) / 6;
        document.getElementById("result").innerHTML = "YOUR AVERAGE RESULT : " + sem6th.toFixed(2);
        document.getElementById("Percentage").innerHTML = "YOUR PERCENTAGE : " + ((sem6th * 10).toFixed(0)) + '%';

    }
    else if (semnum == 7) {
        var sem7th = (resa + resb + resc + resd + rese + resf + resg) / 7;
        document.getElementById("result").innerHTML = "YOUR AVERAGE RESULT : " + sem7th.toFixed(2);
        document.getElementById("Percentage").innerHTML = "YOUR PERCENTAGE : " + ((sem7th * 10).toFixed(0)) + '%';
    }
    else if (semnum == 8) {
        var sem8th = (resa + resb + resc + resd + rese + resf + resg + resh) / 8
        document.getElementById("result").innerHTML = "YOUR AVERAGE RESULT : " + sem8th.toFixed(2);
        document.getElementById("Percentage").innerHTML = "YOUR PERCENTAGE : " + ((sem8th * 10).toFixed(0)) + '%';
    }
    else {
        document.getElementById("result").innerHTML = "PLEASE ENTER VALID THINGS";

    }


});
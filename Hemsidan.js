document.getElementById("gen_z_humor").volume = 0.03;

var fel1 = new Audio("wet-fart-6139.mp3");
var fel2 = new Audio("Wrong-answer-sound-effect.mp3");
var fel3 = new Audio("дебил блядь.mp3");
var fel4 = new Audio("tf2youfailed.mp3");
var fel5 = new Audio("Scout_dominationmed01.wav");
var fel6 = new Audio("Dude_youvegottabekid.wav");
var köpljud = new Audio("cash.mp3");
var tack = new Audio("DSP thanks for the money (sound effect).mp3");
var nu = new Date();
var nuTimmar = nu.getHours();
var pris1;
var pris2;

if (nuTimmar < 12) {
    pris1 = "3499999 kr";
    pris2 = "5999999 kr";
} else if (nuTimmar >= 12) {
    pris1 = "6999999 kr";
    pris2 = "9999999 kr";
} else {
    pris1 = "Tiden har slutat att ha en betydelse, och därför så har pengar ingen betydelse heller.";
    pris2 = "Tiden har slutat att ha en betydelse, och därför så har pengar ingen betydelse heller.";
}

var visaPris1 = document.getElementById("pris1");
visaPris1.textContent = pris1;
var visaPris2 = document.getElementById("pris2");
visaPris2.textContent = pris2;


function förnamnsfixaren() {
    var förnamn = document.getElementById("förnamn").value;
    const capitalized = förnamn.charAt(0).toUpperCase() + förnamn.slice(1).toLowerCase();
    document.getElementById("förnamn").value = capitalized;
}

function efternamnsfixaren() {
    var efternamn = document.getElementById("efternamn").value;
    const capitalized = efternamn.charAt(0).toUpperCase() + efternamn.slice(1).toLowerCase();
    document.getElementById("efternamn").value = capitalized;
}

function mejlfixaren() {
    var mejl = document.getElementById("mejl").value;
    document.getElementById("mejl").value = mejl.toLowerCase();
}

var köpräknaren = 0;
document.getElementById("köpräknaren").innerHTML = köpräknaren;

function rättkollaren() {
    var modell = document.getElementById("modell").value;
    var förnamn = document.getElementById("förnamn").value;
    var efternamn = document.getElementById("efternamn").value;
    var land = document.getElementById("land").value;
    var adress = document.getElementById("adress").value;
    var mejl = document.getElementById("mejl").value;
    var köp = true;

    if (modell == null || modell == "") {
        var modellFel = "Du skrev inte vilken modell du vill ha, idiot.";
        document.getElementById("felmodell").innerHTML = modellFel;
        fel1.play();
        köp = false;
    } else if (modell != null || modell != "") {
        document.getElementById("felmodell").innerHTML = "";
    }

    if (förnamn == null || förnamn == "") {
        var förnamnFel = "Du skrev inte ditt förnamn, idiot.";
        document.getElementById("felförnamn").innerHTML = förnamnFel;
        fel2.play();
        köp = false;
    } else if (förnamn != null || förnamn != "") {
        document.getElementById("felförnamn").innerHTML = "";
    }

    if (efternamn == null || efternamn == "") {
        var efternamnFel = "Du skrev inte ditt efternamn, idiot.";
        document.getElementById("felefternamn").innerHTML = efternamnFel;
        fel3.play();
        köp = false;
    } else if (efternamn != null || efternamn != "") {
        document.getElementById("felefternamn").innerHTML = "";
    }

    if (land == null || land == "") {
        var landFel = "Du skrev inte vilket land du befinner dig i, idiot.";
        document.getElementById("felland").innerHTML = landFel;
        fel4.play();
        köp = false;
    } else if (land != null || land != "") {
        document.getElementById("felland").innerHTML = "";
    }

    if (adress == null || adress == "") {
        var adressFel = "Du skrev inte din adress, idiot.";
        document.getElementById("feladress").innerHTML = adressFel;
        fel5.play();
        köp = false;
    } else if (adress != null || adress != "") {
        document.getElementById("feladress").innerHTML = "";
    }

    if (mejl == null || mejl == "") {
        var mejlFel = "Du skrev inte din mejl, idiot.";
        document.getElementById("felmejl").innerHTML = mejlFel;
        fel6.play();
        köp = false;
    } else if (mejl != null || melj != "") {
        var giltigMejl = mejl.match(/^[a-zA-ZåäöÅÄÖ]+[a-zA-ZåäöÅÄÖ0-9.]*@[a-zA-ZåäöÅÄÖ0-9]*[a-zA-ZåäöÅÄÖ]+[a-zA-ZåäöÅÄÖ0-9]*\.[a-zA-ZåäöÅÄÖ0-9]*[a-zA-ZåäöÅÄÖ]+[a-zA-ZåäöÅÄÖ0-9]*$/) == null ? false : true;
        if (!giltigMejl) {
            var mejlFel = "Vi tar inte emot såna mejladresser!";
            document.getElementById("felmejl").innerHTML = mejlFel;
            fel6.play();
            köp = false;
        } else {
            document.getElementById("felmejl").innerHTML = "";
        }
    }

    if (köp == true) {
        köpräknaren += 1;
        document.getElementById("köpräknaren").innerHTML = köpräknaren;
        köpljud.play();
        tack.play();
        submit();

    }
}


                                    //____________7777777777777777____________//
                                    //_________777_______________7777_________//
                                    //_______777_____________________777______//
                                    //______77_________________________7777___//
                                    //_____7___________77777777777_________u__//
                                    //____1_____7777777___________7777______1_//
                                    //___7______7_____________________77____77//
                                    //___n____________17________________7____u//
                                    //__n_______77777___777777777____________1//
                                    //__n____7777___777___________77_________7//
                                    //_77___7__________1________777_777______7//
                                    //_17__77__________________77______1_____7//
                                    //_u_6880qqqqqqq6u7_________________7____7//
                                    //_u_q8u________7756b417_________________7//
                                    //_u78q_____7717_____48880q44446ddd4415159//
                                    //_nn64___794086347_7d7763___________75d80//
                                    //75n14__797_9q7_n73d5___077777nu7_____780//
                                    //1574b333dq1777ud66n____7d75__b07bu___704//
                                    //1677_777777777777_77777770847__761777183//
                                    //u5u_____77777_777777_____777uu7715555543//
                                    //4u7_1________17_48807__1u77__777_____777//
                                    //6477_________u_78888u_588d_u_________n7u//
                                    //6u1n_________77_5114774qd47u_________u1q//
                                    //o93n________7_71n_n777d_u_77_________1ud//
                                    //ud_77_____77_7u7uu17777u6nn_7________7u7//
                                    //b5__7____7_____7777u71o71d4__77_______51//
                                    //uu7_____7_____54n47477n_4q67___7______uu//
                                    //16q_____n___u54808888880b465____7____n4n//
                                    //107_________557888888888885_7___77___707//
                                    //56_u7_______u13888888888884_u_________bb//
                                    //76335_________7888888888880_7_______7756//
                                    //n0767_________788888888888d7_________n53//
                                    //n676__________7888888888884u_________467//
                                    //7144__________n388888888885u________77d_//
                                    //_7987_________u_088888888857________6445//
                                    //___b51________u_b8888888807_7______7407_//
                                    //___615u_______u_3888888886__1_____14d0__//
                                    //___335u_______5_1d433333b7_77____77661__//
                                    //___u94777_____1____________u_____u_037__//
                                    //____u67uuu_____n___________n_____u1817__//
                                    //___7_5u61u__7__77_________7____7744bu___//
                                    //___7___675__3____777777777_____708d11___//
                                    //____7__15q1_6_________________n780n_1___//
                                    //____7___7qd5n71____________734d48u__77__//


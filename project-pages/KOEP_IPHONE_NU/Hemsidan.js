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
    var postnummer = document.getElementById("postnummer").value;
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

    if (postnummer == null || postnummer == "") {
        var postnummerFel = "Du skrev inte ditt postnummer, idiot.";
        document.getElementById("felpostnummer").innerHTML = postnummerFel;
        fel1.play();
        köp = false;
    } else if (adress != null || adress != "") {
        document.getElementById("felpostnummer").innerHTML = "";
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd::kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl;oc;OWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c:loo:cxKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOcxOl;ld:.oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk;:do:;cdc';OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNxcoddk000dc:,oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo,:;,,ck0Odc;';0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx'.....':llccc:,oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx:oxddodOkdddkO0xcOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKdc;..'''',;;. ...',:,:KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l'. .................. .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk:..........................;0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd. .......',:lc.  ............:0KKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl. . ..'',';clc;'...  ....... ..'lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo;oo:lo;,,..,;lc...  ......... .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWMWXx;cxoc::ll.  ........... .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl,o0KKKKKKOc.. .:,....... .cOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO::oddk0KKKKKKkl:c;;'...... .;kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl'll;:d0KKKKKK0xodo;. .... 'kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx:..:xO0KKKKKKOcl0l... ...lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMKkxxkO0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc.,::;xKKKK0xl:xKo;cl:..'kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMNl.;;;;::ldxxdx0NMWXKOkxxxk0NMMMMMMMMMMMW0:':oxOKKK0xox00k::dOKd;xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMKl'''',;cdkOOxlcll:'... . ..;dkkO0KNWMMNkxolk0KKKKK0Oxolc:cx0KKxckWWWWMMMMMMMMMMMMMMMMMMMMMMMMKdldKKkxxKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMNl.,;;;;ckKKKKKKKOk:.   .....  .....'cxXk;cOKKKKOdoc;:codkxdOKKKk,':::::lx0NMMMMMMMMMMMMMMMNOxkc;;;l;cl,cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMWk;.';:ccodx0KKKKKKx'    ...........  .'coolllc:;cdo,:OKKklo0KKKx.   .    .,dXMMMMMMMMMMMMMO,.''c:::;l:cOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMNl.:oolccc,'o0OO0KOc.    ......       .  ;dc....';:,..cxdoodlc:,.            ;KMMMMMMMMMMMM0:,,.,,,,;;,OWXOk0NMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMW0xxxxkxl:coo:coll;......   .......    .  .,',do;;;..,dxl;..    ...........  .kMMMMMMMMMMMMWk;,,;oo:ox;lXd;c;xWMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMKc:k0x;lXWXKK00K0Okx;. ........   ...,:';:;:'.:l;..  ...........''''.. .dNMMMMMMMMMMMMNl;k0KKKKk;;x:lO:cXMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMM0lldocdXMMMMMMMMMMMMNd,.  ............',',,. ..   .................,cc,..;dXMMMMMMMMWNk;:0KKKKKOlccclc;xWMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMWNXXXWMMMMMMMMMMMMMMMMNkc'.  ..............   ....................''cc,....:KMMMMMWOl'.;xKKKK0dcldxdoxKWMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkl;..  .........   .............................  ;KMMWO:.   .:dO0x;,dXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkc'.   ..',,. ..'''.......   ................  :0Kd.       ..,..oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0x:.,odoc' .;ccol;;,,''..      ............ .... ....       cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,,lodl,.':cl:,cc:do::;...    ..............  ......... .cKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl':cccl'.,:c:.;llxlccl;...     .....................  'xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,.:cll,..;lc;:odolooc:,.. .:;.  .................  'dXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO,.;:;' 'llllcdxo:,;;;;... cKk:.  ...........  ..:dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0:.......';ccodc' 'ccl:.. 'OMNkc;'.........,;lkXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo. ....   ............. .oWMMMWXK0000000XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'  ....   ............ ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl.  ....   .......... .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKd;. ...   ......... .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl. ...    ....... .xMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO' ....   .......  lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc  ...    ....... ;XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx. ...    ....... 'kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0kxx:. ....   .......  .;lxKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c'.              ....       ..;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo.  .    ..                ..... .;OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:  ..   ........................... .:kXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl. ...   ............  ..............  .;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk. ....   ............   ................ .:0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd. ....   ............    ................  'xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx. .....    ...........    ................. .oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX:  .....       ..     .::.  ................ .;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd. .......      .;;:lxKWWOc.. ...............  .:KWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK,  ........... ;xKWMMMMMMWXxc'.  .............  ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO'  .......... .,xMMMMMMMMMMWXOo:'....  ....... .lWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0;  ......... ..dWMMMMMMMMMMMMMWNK0Od'  ...... .lWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo'  ....... ..dWMMMMMMMMMMMMMMMMM0:.   ..... ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKd.  .....  .,xXMMMMMMMMMMMMMMM0,  ....... .lWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo. .......   :XMMMMMMMMMMMMMX:  ........ .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd'  ....... .dWMMMMMMMMMMMNo. ........  cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo. ........ .dXMMMMMMMMMWk. ........ .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk. ..        .oWMMMMMMMWk'  ......  ,kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.           ;KMMMMMNOl.      .  .cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk.          .cXMMNk,.         .:xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,            ,ONd.         .o0XNXKKXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKxc'             'kNo.         .,,,'....,xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd,.           ,c;:oKWMWKkx:.               :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK,           .:KMWWMMMMMMMMWOl,.       ...,c0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l:,'''',cdk0NMMMMMMMMMMMMMMMN0xxxxxxO0KXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNXNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

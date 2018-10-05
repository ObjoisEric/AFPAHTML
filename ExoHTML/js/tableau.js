// var nombreSaisi = prompt("saisir nombre de chiffre à afficher");
// nombreSaisi = Number(nombreSaisi);
// var nombreColonne = prompt("saisir nombre de Colonne");
// nombreColonne = Number(nombreColonne);

// for (i = 1; i <= nombreSaisi; i++) {
//     // document.write("<h1>"+i+"</h1>");
//     document.getElementById("valeur").innerHTML += "<h1>" + i + "<h1/>";
// }


function calculResultat() {
    var operand1 = Number(document.getElementById("operand1").value);
    var operand2 = Number(document.getElementById("operand2").value);
    var operator = document.getElementById("operator").value;
    var resultat;
    var messageAEnvoyer = -1;
    switch (operator) {
        case "+" :
            resultat = addition(operand1, operand2);
            messageAEnvoyer = 1;
            break;
        case "-" :
            resultat = soustraction(operand1, operand2);
            messageAEnvoyer = 1;
            break;
        case "*" :
            resultat = multiplication(operand1, operand2);
            messageAEnvoyer = 1;
            break;
        case "/" :
            if (operand2 !== 0) {
                resultat = division(operand1, operand2);
                messageAEnvoyer = 1;
            } else {
                messageAEnvoyer = 0;
            }
            break;
    }
    switch (messageAEnvoyer) {
        case 1 :
            document.getElementById("resultat").innerHTML = resultat;
            break;
        case 0 :
            document.getElementById("resultat").innerHTML = "impossible de diviser par zero";
            break;
        default :
            document.getElementById("resultat").innerHTML = "operation non valide";
    }
}

function addition(valeur1, valeur2) {
    return valeur1 + valeur2;
}

function soustraction(valeur1, valeur2) {
    return valeur1 - valeur2;
}

function multiplication(valeur1, valeur2) {
    return valeur1 * valeur2;
}

function division(valeur1, valeur2) {
    return valeur1 / valeur2;
}

var bonjour = "bonjour";
bonjour.charAt(0);
document.write(bonjour.charAt(0) + "<br/>");
document.write(bonjour.toUpperCase() + "<br/>");
document.write(bonjour.toLowerCase() + "<br/>");

var tableau = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];

for (i = 0; i < tableau.length; i++) {
    document.write((i + 1) + " " + tableau[i]);
    document.write("<br/>");
}

document.getElementById("operand1").onmouseleave = (
    function () {
        document.getElementById("operand1").style.backgroundColor = "#499CF8";
    }
);

function tableauChiffre() {
    var solution = "";
    var nombreInitiale = 1;
    var valeurFondCouleur = 1;

    var nombreChiffre = document.getElementById("nombreChiffre").value;
    nombreColonne = document.getElementById("nombreColonne").value;

    solution += "<table>";
    for (ligne = 1; nombreInitiale <= nombreChiffre; ligne++) {
        solution += "<tr>";
        for (i = 0; i < nombreColonne; i++) {
            if (nombreInitiale <= nombreChiffre) {
                if ((ligne+nombreColonne) % 2 !== 0) {
                    if ((nombreInitiale  %2)  !== 0) {
                        valeurFondCouleur = 2;
                    } else {
                        valeurFondCouleur = 1;
                    }
                }else{
                    if (((nombreInitiale+ligne)  %2)  !== 0) {
                        valeurFondCouleur = 1;
                    } else {
                        valeurFondCouleur = 2;
                    }
                }

                switch (valeurFondCouleur) {
                    case 1 : solution += "<td class = \"redBackground\">" + (nombreInitiale++) + "</td>";
                    break;
                    case 2 : solution += "<td class = \"blueBackground\">" + (nombreInitiale++) + "</td>";
                    break;
                    default : solution += "<td class = \"greenBackground\">" + (nombreInitiale++) + "</td>";
                    break;
                }

            }
        }
        solution += "</tr>";
    }
    solution += "</table>";
    document.getElementById("tableau").innerHTML = solution;
}

function ajoutSolution(phraseActuel, valeurActuel) {

    if ((valeurActuel % 2) !== 0) {
        phraseActuel += "<td class = \"redBackground\">" + (valeurActuel++) + "</td>";
    } else {
        phraseActuel += "<td class = \"blueBackground\">" + (valeurActuel++) + "</td>";
    }

    return phraseActuel;
}

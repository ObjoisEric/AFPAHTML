console.log("Hello JS");

alert("1" === 1);
var nom = "John";
console.log("nom : " + nom);
console.log(typeof (nom));

var entier=10;
console.log(typeof(entier));

var nombre = "120";
console.log(typeof(nombre));
nombre = Number(nombre);
console.log(typeof(nombre));
/*
nom = prompt("saisir nom");

switch (nom) {
    case "bonjour":
        console.log("bonjour switch");
        break;
    default :
        console.log("autre");
}*/

var nombre1 = prompt("saisir nombre1");
nombre1=Number(nombre1);
var operation = prompt("saisir operation");
var nombre2 = prompt("saisir nombre2");
nombre2=Number(nombre2);

switch (operation) {
    case "+":
        console.log(addition(nombre1,nombre2));
        document.getElementById("resultat").innerHTML = (nombre1 +" "+"+"+ " " + nombre2 +" " + "=" + " " +addition(nombre1,nombre2));
    break;
    case "-":
        console.log(soustraction(nombre1,nombre2));
        document.getElementById("resultat").innerHTML = (nombre1 +" "+"-"+ " " + nombre2 +" " + "=" + " " +soustraction(nombre1,nombre2));
    break;
    case "*":
        console.log(multiplication(nombre1,nombre2));
        document.getElementById("resultat").innerHTML = (nombre1 +" "+"*"+ " " + nombre2 +" " + "=" + " " +multiplication(nombre1,nombre2));
    break;
    case "/":
        if (nombre2 !== 0){
            console.log(division(nombre1,nombre2));
            document.getElementById("resultat").innerHTML = (nombre1 +" "+"/"+ " " + nombre2 +" " + "=" + " " +division(nombre1,nombre2));
        }else {
            console.log("division par zero impossible");
            document.getElementById("resultat").innerHTML = "division par zero impossible";
        }
    break;
    default :
        console.log("operation non valide");
        document.getElementById("resultat").innerHTML = "operation non valide";
}
function addition( valeur1 , valeur2) {
    return valeur1 + valeur2;
}
function soustraction(valeur1, valeur2) {
    return valeur1- valeur2;
}
function multiplication(valeur1, valeur2) {
    return valeur1 * valeur2;
}
 function division(valeur1, valeur2) {
     return valeur1 / valeur2;
}
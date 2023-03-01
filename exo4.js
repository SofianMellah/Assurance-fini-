function calculerprime(){

let age = document.getElementById("age").value;
let anneePermis = document.getElementById("annéepermis").value;
let nombreaccidents = document.getElementById("accident").value;
let ancienneteAssurance = document.getElementById("ancienneté").value;


// Début refus

if (nombreaccidents >= 3) {
    console.log(`Refuser`)
    document.getElementById("résultat").value = `Refuser`
}

// Fin refus


// Début tarif rouge

if ((age < 25 && anneePermis < 2 && nombreaccidents < 1) || (age < 25 && anneePermis > 2 && nombreaccidents > 0) || (age > 25 && anneePermis > 2 && nombreaccidents == 2)) {
    console.log(`Tarif rouge`)
    document.getElementById("résultat").value = `Tarif rouge`
}

// Fin tarif rouge



// Début tarif orange

if ((age < 25 && anneePermis > 2 && nombreaccidents < 1) || (age > 25 && anneePermis > 2 && nombreaccidents < 2 && nombreaccidents >= 1) || (age > 25 && anneePermis < 2 && nombreaccidents < 1) || (age < 25 && anneePermis < 2 && nombreaccidents < 1 && ancienneteAssurance >= 1) || (age < 25 && anneePermis > 2 && nombreaccidents > 0 && ancienneteAssurance >= 1) || (age > 25 && anneePermis > 2 && nombreaccidents == 2 && ancienneteAssurance >= 1)) {
    console.log(`Tarif orange`)
    document.getElementById("résultat").value = `Tarif orange`
}

// Fin tarif orange



// Début tarif vert

if ((age > 25 && anneePermis > 2 && nombreaccidents < 1) || (age < 25 && anneePermis > 2 && nombreaccidents < 1 && ancienneteAssurance >= 1) || (age > 25 && anneePermis > 2 && nombreaccidents < 2 && nombreaccidents >= 1 && ancienneteAssurance >= 1) || (age > 25 && anneePermis < 2 && nombreaccidents < 1 && ancienneteAssurance >= 1)) {
    console.log(`Tarif vert`)
    document.getElementById("résultat").value = `Tarif vert`
}
}
// Fin tarif vert
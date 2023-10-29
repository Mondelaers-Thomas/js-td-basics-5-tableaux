/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(date) {
    const year = date.substring(6);
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            } else {
                return  false;
            }
        } else {
            return true;
        }
    } return false;
}

// Fonction pour vérifier si une date est valide
function isValid(date) {
    const maxJours = ["31", isBissextile(date) ? "29" : "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    const month = date.substring(3, 5);
    const day = date.substring(0, 2);

    if (Number(day) > 31 || Number(day) <= 0  ||  Number(month) <= 0 || Number(month) > 12) {
        return false;
    } else if(month === "02" && day === "29"){
        if(isBissextile(date)){
            return true;
        } else {
            return false;
        }
    } else if(day === "30"){
        if(maxJours[Number(month) - 1] === "30") {
            return true;
        } else {
            return false;
        }
    } else if(day === "31"){
        if(maxJours[Number(month) - 1] === "31") {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console
// Demander à l'utilisateur de saisir une date
const dateUtil = prompt("Veuillez entrer date(jj-mm-aaaa)");

// Utilisation de la fonction isValid pour vérifier la date
if(isValid(dateUtil)){
    console.log('Votre date est valide !');
} else {
    console.log('Votre date est invalide !');
}

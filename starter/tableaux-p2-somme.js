/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10.
2. Affichez le tableau (précédé du texte : "Voici mon tableau de nombres :").
3. Calculez puis affichez la somme des valeurs du tableau 'nombres' :
   - Utilisez la méthode 'forEach()' pour afficher la somme des nombres dans le tableau (précédée du texte : "La somme des nombres de mon tableau est …").
   - Utilisez une boucle 'for/of' pour faire la même chose.

let nombres = [11, 3, 7, 2, 9, 10];
let addition = 0;
let addition2 = 0;
console.log(`Voici mon tableau de nombres : ${nombres.join(', ')}`);
//-- forEach version :
nombres.forEach((nombre)=>{
    addition += nombre;
})
console.log(`La somme des nombres de mon tableau est ${addition}`);

//-- for...of version :
for(const nombre of nombres){
    addition2+= nombre;
}
console.log(`La somme des nombres de mon tableau est ${addition}`);
--------------------------------------
Version alternative (avec BONUS) :
1. Initialisez
   - une variable 'message' à une chaîne vide ;
   - une variable 'somme' à 0.
2. Parcourez votre tableau de nombres à l'aide d'une boucle 'for' pour construire le message : "… + … + … = ".
3. Parcourez votre tableau de nombres à l'aide d'une boucle 'for/of' pour calculer la somme des valeurs du tableau.
4. Affichez le message final : "… + … + … = …".
*/
let nombres = [11, 3, 7, 2, 9, 10];

let message = '';
let somme = 0;

//-- Création du message :
for(let i = 0; i < nombres.length; i++){
    if(i === nombres.length - 1){
        message += ` ${nombres[i]} = `;
    } else {
    message += ` ${nombres[i]} +`;
    }
}

//-- Addition du tableau :
for(const addition of nombres){
    somme += addition;
}

console.log(message + somme);
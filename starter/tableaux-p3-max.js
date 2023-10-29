/*
TABLEAUX - PRÉPA 3 : Maximum d'un tableau
1. Initialisez un tableau qui contient les nombres 3, 11, 7, 2, 9 et 10.
2. Affichez le tableau.
3. Calculez et affichez ensuite la plus grande valeur présente dans le tableau (précédée du message "La plus grande valeur de mon tableau est …").
4. Changez quelques valeurs dans le tableau (par exemple, le 9 en 90) et retestez.

Aide :
- Initialisez une variable 'max' avec la première valeur du tableau.
- Parcourez le tableau à la recherche d'un nombre plus grand que 'max' en commençant au deuxième élément du tableau :
  - Si la valeur courante est supérieure à 'max', elle devient le nouveau 'max'.
- Affichez le résultat.
*/
let tableauxP3Max = [3, 11, 7, 2, 9, 10];
let max = 0;

tableauxP3Max.join(', ');
function maxNumber(tableau) {
    for(let i = 0; i < tableau.length; i++){
        if(tableau[i] > max){
            max = tableau[i];
        }
    }
}
maxNumber(tableauxP3Max);
console.log(`La plus grande valeur de mon tableau est ${max}`);

tableauxP3Max.splice(2, 1, 90);

maxNumber(tableauxP3Max);
console.log(`La plus grande valeur de mon tableau est ${max}`);

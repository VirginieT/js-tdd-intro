/*
Exercice 1 :
Créer un objet “Personne” qui possède les propriétés suivantes :
nom (string)
âge (number)
email (string)
Ensuite, créez deux instances de cet objet pour deux personnes différentes, et affectez-leur des valeurs pour leurs propriétés.
Enfin, créez une fonction “présentation” qui prend un objet “Personne” en entrée et qui retourne une chaîne de caractères contenant une présentation de la personne. Cette présentation devrait inclure son nom, son âge et son email.
Par exemple, si vous avez créé deux instances de l’objet “Personne” nommées “personne1” et “personne2", la fonction “présentation” devrait pouvoir être appelée comme suit : console.log(presentation(personne1)); // “Je m’appelle [nom], j’ai [âge] ans et mon email est [email]” console.log(presentation(personne2)); // “Je m’appelle [nom], j’ai [âge] ans et mon email est [email]”
Notez que les crochets [] représentent les valeurs des propriétés de chaque instance de l’objet “Personne”.
*/

const person = {
  name: "",
  age: 30,
  email: ""
};

// Create 2 instances of the object Person with different values
const person1 = Object.create(person);
person1.name = 'Sophie.Stiquée';
person1.age = 25;
person1.email = 'sophie.stiquée@caramail.fr';

const person2 = Object.create(person);
person2.name = 'Juste.Unbridou';
person2.age = 30;
person2.email = 'juste.unbridou@caramail.fr';

// Create a function presentation 
function presentation(person) {
  return `Je m'appelle ${person.name}, j'ai ${person.age} ans et mon email est ${person.email}.`;
}

console.log(presentation(person1));
console.log(presentation(person2));



/* Exercice 2 :
Créer un objet “Animal” qui possède les propriétés suivantes :
nom (string)
espèce (string)
poids (number)
Ensuite, créez un tableau d’objets qui représente un zoo. Chaque objet du tableau doit être une instance de l’objet “Animal” et doit représenter un animal différent du zoo.
Enfin, créez une fonction “listeAnimaux” qui prend le tableau d’objets en entrée et qui retourne une chaîne de caractères contenant la liste de tous les animaux du zoo. Cette liste devrait inclure le nom, l’espèce et le poids de chaque animal, triée par ordre alphabétique du nom.
Par exemple, si vous avez créé un tableau d’objets nommé “zoo” contenant plusieurs instances de l’objet “Animal”, la fonction “listeAnimaux” devrait pouvoir être appelée comme suit : console.log(listeAnimaux(zoo)); // “Voici la liste des animaux du zoo : // - [nom1], espèce : [espèce1], poids : [poids1]kg // - [nom2], espèce : [espèce2], poids : [poids2]kg // ...” Notez que les crochets [] représentent les valeurs des propriétés de chaque instance de l’objet “Animal”.
*/

const animal = {
  name: "",
  species: "",
  weight: 0
};

// Create a zoo array 
const zoo = [
  { name: "Tigrou", animalSpacies: "Tigre", weight: 200 },
  { name: "Simba", animalSpacies: "Lion", weight: 150 },
  { name: "Volt", animalSpacies: "Chien", weight: 30 },
  { name: "Félix", animalSpacies: "Chat", weight: 5 },
  { name: "Mickey", animalSpacies: "Souris", weight: 0.5 },
];

// Create a function animalList
function animalList(zoo) {
  let list = "Voici la liste des animaux du zoo : ";
  for (let i = 0; i < zoo.length; i++) {
    list += ` - ${zoo[i].name}, espèce : ${zoo[i].animalSpacies}, poids : ${zoo[i].weight}kg`;
  }
  return list;
}
console.log(animalList(zoo));







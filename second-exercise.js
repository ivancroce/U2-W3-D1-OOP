// form + button con bootstrap
// species, breed, con select
// static method
// preventDefault and submit per il form
// dopo instance, da mettere in un array e poi pusharle

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}
/* const pet1 = new Pet(`Mario`, `Rocco`, `Dog`, `Labrador`);
const pet2 = new Pet(`Giuseppe`, `Rocco`, `Cat`, `Persian`);
const pet3 = new Pet(`Luca`, `Francesco`, `Dog`, `Labrador`);

console.log(Pet.sameOwner(pet1, pet2));
console.log(Pet.sameOwner(pet1, pet3));
console.log(Pet.sameOwner(pet2, pet3)); */

const pets = [];

document.getElementById(`petForm`).addEventListener(`submit`, function (event) {
  event.preventDefault();

  const petName = document.getElementById(`petName`).value;
  const ownerName = document.getElementById(`ownerName`).value;
  const species = document.getElementById(`species`).value;
  const breed = document.getElementById(`breed`).value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
});

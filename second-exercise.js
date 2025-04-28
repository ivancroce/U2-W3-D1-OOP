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

// just to confirm the static method, same as first-exercise
/* const pet1 = new Pet(`Mario`, `Rocco`, `Dog`, `Labrador`);
const pet2 = new Pet(`Giuseppe`, `Rocco`, `Cat`, `Persian`);
const pet3 = new Pet(`Luca`, `Francesco`, `Dog`, `Labrador`);

console.log(Pet.sameOwner(pet1, pet2));
console.log(Pet.sameOwner(pet1, pet3));
console.log(Pet.sameOwner(pet2, pet3)); */

// empty array
const pets = [];

document.getElementById(`petForm`).addEventListener(`submit`, function (event) {
  event.preventDefault();
  // to get the value from the form
  const petName = document.getElementById(`petName`).value;
  const ownerName = document.getElementById(`ownerName`).value;
  const species = document.getElementById(`species`).value;
  const breed = document.getElementById(`breed`).value;
  // to create a new pet
  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  // to show pets in the list
  displayPets();

  // to verify if the first pet and second pet share the same owner
  if (pets.length > 1) {
    const pet1 = pets[0];
    const pet2 = pets[1];
    if (Pet.sameOwner(pet1, pet2)) {
      console.log(`${pet1.petName} and ${pet2.petName} share the same owner!`);
    } else {
      console.log(`${pet1.petName} and ${pet2.petName} have different owners.`);
    }
  }

  // Form Reset
  document.getElementById("petForm").reset();
});

// function to show the petsList
function displayPets() {
  const petsList = document.getElementById("petsList");
  petsList.innerHTML = ""; // to reset the list

  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = `${pet.petName} (Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed})`;
    petsList.appendChild(listItem);
  });
}

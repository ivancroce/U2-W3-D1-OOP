class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} is older than ${otherUser.firstName}.`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} is younger than ${otherUser.firstName}.`;
    } else {
      return `${this.firstName} and ${otherUser.firstName} have the same age.`;
    }
  }
}

const user1 = new User(`Mario`, `Rossi`, 35, `Roma`);
const user2 = new User(`Lucia`, `Bianchi`, 30, `Genova`);
const user3 = new User(`Giuseppe`, `Verdi`, 35, `Milano`);

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user3));
console.log(user1.compareAge(user3));

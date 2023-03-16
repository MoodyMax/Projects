//refactor
//old

function createInstructor1(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

//new

function createInstructor2(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

//COMPUTED PROPERTY NAMES

//old

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
};

instructor[favoriteNumber] = "That is my favorite!";

// new

let instructor2 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

//OBJECT METHODS
//old way

var instructor3 = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};

//new way

let instructor4 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

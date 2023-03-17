// PART ONE
//Create a class for vehicle. Each vehicle instance should have the following properties:
//MAKE, MODEL, YEAR

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    console.log("Beep.");
  }
  toString() {
    console.log(
      `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    );
  }
}

// PART TWO

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

const myCar = new Car("toyota", "camry", "1997");

//PART THREE

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    console.log("VROOM!!!");
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

//PART FOUR

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return " Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "We are full.";
    } else this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}

myGarage = new Garage(2);
const Tonka = new Car("Tonka", "Twizzle", "2077");

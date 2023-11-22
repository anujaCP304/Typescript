
// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type Aliases
// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car1: Car = {
  year: carYear,
  type: carType,
  model: carModel
};


//Example 2
type AnimalName = string
type AnimalType = string
type Animal = {
  name: AnimalName,
  type: AnimalType
}

const animal1: Animal = {
  name: "Buddy",
  type: "Dog"
}

const animal2: Animal = {
  name: "Mittens",
  type: "Cat"
}

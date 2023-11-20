const names: string[] = [];
names.push("Anuja"); // no error
//console.log(names);
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// The readonly keyword can prevent arrays from being changed.
const names2: readonly string[] = ["Anuja"];
names.push("Mane"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Type Inference
// TypeScript can infer the type of an array if it has values.
const numbers = [10, 20, 30, 40, 50]; // inferred to type number[]
numbers.push(60); // no error
//console.log(numbers);
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numbers.indexOf(40));

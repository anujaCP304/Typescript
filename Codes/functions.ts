// TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.

// The type of the value returned by the function can be explicitly defined.
// the `: number` here specifies that this function returns a number

function getTime(): number 
{
  return new Date().getTime();
}

// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.

function printHello(): void 
{
  console.log('Hello!');
}
printHello();
// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

function multiply(a: number, b: number) 
{
  return a * b;
}
console.log(multiply(1,3));

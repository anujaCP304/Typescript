enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  const currentDirection = CardinalDirections.North;
  // logs 0
  console.log(currentDirection);

  const currentDirection2 = CardinalDirections.East;
  // logs 0
  console.log(currentDirection2);

  
  // throws error as 'North' is not a valid enum
 // currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
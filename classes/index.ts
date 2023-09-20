// Generic class representing a Pair of values
class Pair<T, U> {
  private first: T;
  private second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}

// Usage
const numberStringPair = new Pair<number, string>(42, "Hello");
console.log(numberStringPair.getFirst()); // Outputs: 42
console.log(numberStringPair.getSecond()); // Outputs: Hello

const booleanBooleanPair = new Pair<boolean, boolean>(true, false);
console.log(booleanBooleanPair.getFirst()); // Outputs: true
console.log(booleanBooleanPair.getSecond()); // Outputs: false

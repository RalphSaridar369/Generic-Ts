import { Person, Vehicle } from "../variables";

const array_of_numbers = [1, 2, 3, 4];

//it expects each element to be a number
const new_set = new Set<number>();

//it expects each item of the mapped array to be a number
const new_array = array_of_numbers.map<number>((item) => item);

//now let's apply them to functions

function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

const persons: Person<number>[] = [
  { first_name: "John", last_name: "Doe", phone: 111222 },
];

getFirstElement<Person<number>>(persons);

//basically T is defining the type of the argument passed in the function
//in this case when defining the function we are saying that the parameter called arr
//is of type array of T, T can be anything from string to number, etc...
//when we call the function is when we define T
// in this case, T is Person<number>

//we use generic in this case in order to work on any type of data

export type Person<T> = {
  first_name: string;
  last_name: string;
  phone: T;
};

const person1: Person<string> = {
  first_name: "John",
  last_name: "Doe",
  phone: "+111222",
};

const person2: Person<number> = {
  first_name: "John",
  last_name: "Doe",
  phone: 111222,
};

const person3: Person<number | string> = {
  first_name: "John",
  last_name: "Doe",
  phone: 111222,
};

export type Vehicle<T extends Car | Truck> = {
  model: number;
  brand: string;
  details: T;
};

export type Car = {
  seats: number;
  speed: number;
};

export type Truck = {
  motor_size: number;
};

const new_car: Vehicle<Car> = {
  model: 123,
  brand: "toyota",
  details: { seats: 1000, speed: 1000 },
};

const new_truck: Vehicle<Truck> = {
  model: 123,
  brand: "toyota",
  details: { motor_size: 1000 },
};

const new_truck_2: Vehicle<Truck> = {
  model: 123,
  brand: "toyota",
  details: { motor_size: 1000 },
};

//should throw an error here
const new_truck_3: Vehicle<Person<string>> = {
  model: 123,
  brand: "Toyota",
  details: { name: "John", age: 30 },
  first_name: "John",
  last_name: "Doe",
  phone: 111222,
};

type Manager = {
  name: string;
};

type Business = {
  name: string;
};

type Work = {
  location: string;
  business: Business;
  manager: Manager;
};

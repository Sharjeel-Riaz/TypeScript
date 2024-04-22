// First program
console.log("Hello TypeScript!");

// Static typing
let age: number = 10;

// TypeScript debugging
if (age < 50) age += 20; // Path issue - not resolved

// Datatypes without annotation
let number = 123456789;
let language = "TypeScript";
let isPublished = true;
// Datatypes with annotation
let number2: number = 123456789;
let language2: string = "TypeScript";
let isPublished2: boolean = true;

// The any type
let level;
// An implicit any type arrow function
// const renderComponent = (document) => {
//     console.log(document);
// }

// Arrays
let numbers: number[] = [1, 2, 3];

// Tuples
let person: [string, number] = ["John", 25];

// Enums with PascalCase
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize = Size.Small;
console.log(mySize);

// Enums with PascalCase for a more optimized JS code compilation
const enum Size2 {
  Small = 1,
  Medium,
  Large,
}
let mySize2 = Size2.Small;
console.log(mySize2);

// Functions with type annotations for parameters and return type
function calculateTax(amount: number): number {
  // let x = 10;  Config - unused local variable
  if (amount < 50_000) return amount * 1.2;
  return amount * 1.3;
}

// Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "John";

// Type aliases with better object readability
type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 10,
  y: 20,
};

// Union types
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");

// Intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable; // Combining two types with intersection type

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// The Nullable types
function greet(name: string | null | undefined) {
  if (name) console.log("Hello, " + name.toUpperCase() + "!");
  console.log("Hello!");
}
greet(null);
greet(undefined);

// Optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// Without optional property access operator
if (customer !== null && customer !== undefined) console.log(customer.birthday);

// With optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0];

// Optional call opetator
// log?.['a'];

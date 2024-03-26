"use strict";
var _a;
console.log("Hello TypeScript!");
let age = 10;
if (age < 50)
    age += 20;
let number = 123456789;
let language = "TypeScript";
let isPublished = true;
let number2 = 123456789;
let language2 = "TypeScript";
let isPublished2 = true;
let level;
let numbers = [1, 2, 3];
let person = ["John", 25];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Small;
console.log(mySize);
let mySize2 = 1;
console.log(mySize2);
function calculateTax(amount) {
    if (amount < 50000)
        return amount * 1.2;
    return amount * 1.3;
}
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "John";
let point = {
    x: 10,
    y: 20,
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log("Hello, " + name.toUpperCase() + "!");
    console.log("Hello!");
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map
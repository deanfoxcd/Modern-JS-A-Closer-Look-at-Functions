'use strict';

// Default values
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   // Old way to compensate for empty arguments/set default values
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH213', 2);
createBooking('LH123', undefined, 1000); // To skip arguments and use default
*/

// Passing Arguments
/*
const flight = 'LH234';
const dean = {
  name: 'Dean Fox',
  passport: 9642846719,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 9642846719) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, dean);
console.log(flight);
console.log(dean); // This is changed to Mr. Dean Fox because the object is not primitive. The variable just points to a reference in memory, not the actual object

const newPassport = function (person) {
  person.passport = Math.floor(Math.random() * 100000000000);
  console.log(person.passport);
};
newPassport(dean);
checkIn(flight, dean); // Passport will be wrong
*/

// Callback Functions/
/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);
*/

// Functions returning other functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

// As an arrow function
const greetArr = greeting => name => console.log(`${greeting}, ${name}`);

const greeterHey = greet('Hey');
greeterHey('Dean');

greet('Hello')('Belle');
greetArr('Hi')('Dan');
*/

// Call, Apply, and Bind methods
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};
lufthansa.book(123, 'Dean Fox');
lufthansa.book(456, 'Isabelle Fox');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // Makes the function resuable

// book(23, 'Dan Fox'); // Won't work because 'this' now points to undefined

// Call method
book.call(eurowings, 23, 'Dan Fox'); // Calls the book function with 'this' set to eurowings
console.log(eurowings);

book.call(lufthansa, 453, 'Stacy Fox');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 987, 'Madi Norris');

// Apply method
const flightData = [583, 'Aislynn Fox'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // Same as above, just cleaner

// Bind Method
// Does not immediately call the function

const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings); // Returns a new function where the this keyword will always be eurowings
const bookLX = book.bind(swiss);

bookEW(23, 'Atwood Fox');

const bookEW23 = book.bind(eurowings, 23); // Sets the argument permanently (flightNum = 23)
bookEW23('Nellie Fox');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
//The above won't work. The this keyword has become the element of .buy

const buyPlane = lufthansa.buyPlane;
const buyPlaneLH = buyPlane.bind(lufthansa);
// document.querySelector('.buy').addEventListener('click', buyPlaneLH);
// The above will work, it was my best guess. But the below is best
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // To keep the rate constant at 23%
console.log(addVAT(100));

// Challenge (I failed)
// const addTax2 = function (rate) {
//   return function addTax(value) {
//     return value + value * rate;
//   };
// };

// As arrow function (I figured this out)
const addTax2 = rate => value => value + value * rate;

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
*/

// **CODING CHALLENGE #1**
/*

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // My solution
    // const answer = window.prompt(
    //   `${this.question}: \n ${this.options[0]} \n ${this.options[1]} \n ${this.options[2]} \n ${this.options[3]} \n (Write option number)`
    // );

    // Course solution
    const answer = Number(
      window.prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    // My solution. Won't work if the options increase
    //     if (
    //       typeof Number(answer) === 'number' &&
    //       answer >= 0 &&
    //       answer < this.answers.length
    //     ) {
    //       this.answers[answer]++;
    //       console.log(this.answers);
    //     }
    //   },

    // Course solution (using shortcircuiting)
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

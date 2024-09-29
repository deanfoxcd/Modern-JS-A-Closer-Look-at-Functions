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

// Callback Functions

"use strict";


// 1. isHometown
function isHometown(town) {
  return town === "San Franscisco"
}

const isHometown2 = (town) => {
  return town === "San Franscisco"
};

const isHometown3 = (town) => town === "San Franscisco";
// Note: this one line argument does not need curly braces {}


// 2. getFullName
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
};

const getFullName2 = (firstName, lastName) => {
  return `${firstName} ${lastName}`
};

const getFullName3 = (firstName, lastName) => `${firstName} ${lastName}`;


// 3. calculateTotal
function calculateTotal(basePrice, state, tax=0.05) {
  let subtotal = basePrice * (1 + tax);
  
  let fee = 0;
  if (state === 'CA') {
    fee = 0.03 * subtotal;
  } else if  (state === 'PA') {
    fee = 2;
  } else if (state === 'MA') {
    if (basePrice <= 100) {
      fee = 1;
    } else {
      fee = 3;
    };
  };
  return (subtotal + fee);
};

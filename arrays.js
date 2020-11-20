"use strict";


// 1. printIndices
function printIndices(items) {
  for (const item in items) {
    console.log(`${items[item]} ${item}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];
  for (const item in items) {
    if (item % 2 === 0) {
      result.push(items[item]);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}

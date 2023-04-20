'use strict';
// equal to :
// class Sorter {
//   collection: number[];
Object.defineProperty(exports, '__esModule', { value: true });
const NumbersCollection_1 = require('./NumbersCollection');
const Sorter_1 = require('./Sorter');
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
const numbersCollection = new NumbersCollection_1.NumbersCollection([
  109, -4, 32, -3,
]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

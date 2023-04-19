'use strict';
class Sorter {
  constructor(collection) {
    this.collection = collection;
  }
  sort() {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // comparing numbers each go around
        // compares leftHandSide [j] to rightHandSide [j+1]
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          // takes the rightHandSide and throws it over to the left
          this.collection[j] = this.collection[j + 1];
          // takes the leftHandSide and throws it over to the right
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([6, 98, 32, -3]);
sorter.sort();
console.log(sorter.collection);

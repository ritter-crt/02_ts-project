class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
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
// equal to :
// class Sorter {
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }

const sorter = new Sorter([6, 98, 32, -3]);
sorter.sort();

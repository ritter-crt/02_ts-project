export class NumbersCollection {
  constructor(public data: number[]) {}

  // getter to reference length of array
  // collection.length instead of collection.length()
  get length(): number {
    return this.data.length;
  }
  // compare two numbers to decide if numbers in a pairs need to be swapped
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

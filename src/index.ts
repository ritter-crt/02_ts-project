import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([1009, -4, 32, -3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

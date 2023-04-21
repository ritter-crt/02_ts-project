import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([109, -4, 32, -3]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const characterCollection = new CharacterCollection('bsgao');
characterCollection.sort();
console.log(characterCollection.data);
// const sortCharacters = new Sorter(characterCollection);
// sortCharacters.sort();
// console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(72);
linkedList.add(-9);
linkedList.add(3);

linkedList.sort();
linkedList.print();

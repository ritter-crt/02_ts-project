import { CharacterCollection } from './CharacterCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([109, -4, 32, -3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const characterCollection = new CharacterCollection('bsgao');
const sortCharacters = new Sorter(characterCollection);
sortCharacters.sort();
console.log(characterCollection.data);

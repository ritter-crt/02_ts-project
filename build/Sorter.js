"use strict";
// Arguments between interface and actual implementation
// (in NumbersCollection) do not have to match up
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// instead of specific class, we can now pass in
// any object that aligns with our Sortable Interface
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;

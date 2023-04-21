"use strict";
// Arguments between interface and actual implementation
// (in NumbersCollection) do not have to match up
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// turning into abstract class to mark certain methods as existing in the future
// to have enough information to analyze sort()
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;

// Function with generic param
function createPair<K, V>(key: K, value: V) {
    return [key, value];
}

console.log(createPair(1, "10"));
console.log(createPair(2, 20));

// class with generic field
class NamedValue<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public toString(): string {
        return `${this.value}`
    }
}

let namedValue = new NamedValue<number>(10);
console.log(namedValue);


// type aliases
type Wrapped<T> = {value: T}
const wrappedValue: Wrapped<number> = {value: 10}
console.log(wrappedValue);
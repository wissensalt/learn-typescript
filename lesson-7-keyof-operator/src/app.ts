interface Contact {
    id: number;
    name: string;
    status: string;
    birthDate?: Date;
}

type ContactFields = keyof Contact;

function getValue(source: Contact, propertyName: ContactFields) {
    return source[propertyName];
}

function getValueViaGeneric<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

const value = getValue({birthDate: new Date("01-01-2010"), id: 0, name: "", status: ""}, "birthDate")
const valueViaGeneric = getValueViaGeneric({birthDate: new Date("01-01-2010"), id: 0, name: "", status: ""}, "birthDate")

console.log(value)
console.log(valueViaGeneric)
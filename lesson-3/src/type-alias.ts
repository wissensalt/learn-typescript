interface Contact2 {
    id: number;
    name: ContactName;
    birthDate?: Date;
}

type ContactName = string

let secondContact: Contact2 = {
    id: 1,
    name: "John Doe 2"
}

console.log(secondContact)
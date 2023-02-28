interface Contact {
    id: number;
    name: string;
    clone(name: string): Contact;
}

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

const a : Contact = {
    id: 1,
    name: "Contact one",
    clone(name: string): Contact {
        return Object.apply({}, name);
    }
}

const b = clone(a)

const c = a.clone("oke")


console.log(a)
console.log(b)
console.log(c)
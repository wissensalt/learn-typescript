interface Contact extends Address {
    id: number;
    name: string;

    // ? means optional
    birthDate?: Date;
    status: ContactStatus;
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

interface Address {
    line1: string;
    line2: string;
    province: string,
    region: string,
    postalCode: string
}

let primaryContact : Contact = {
    id: 1,
    name: "John Doe",
    birthDate: new Date("01-01-2000"),
    line1: "line1",
    line2: "line2",
    province: "jkt",
    region: "west jkt",
    postalCode: "12345",
    status: ContactStatus.New
}

console.log(primaryContact)
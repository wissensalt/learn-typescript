type ContactBirthDate = Date | number | string

type ContactStatus = "active" | "inactive" | "new"
interface Contact {
    id: number,
    name: string,
    birthDate?: ContactBirthDate
    status: ContactStatus
}

interface Address {
    country: string,
    province: string,
    city: string,
    address: string
}

type AddressableContact = Contact & Address


function getBirthDate(contact: Contact): Date {
    if (typeof contact.birthDate === "number" || typeof contact.birthDate === "string") {
        return new Date(contact.birthDate);
    }

    return contact.birthDate;
}
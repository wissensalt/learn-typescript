interface ContactGeneric {
    id: number,
    name: string,
}

function cloneGeneric<T1, T2>(source: T1): T2 {

    return Object.apply({}, source);
}

const contactA : ContactGeneric = {id: 0, name: ""}
const contactB = cloneGeneric(contactA);
const contactC = cloneGeneric<ContactGeneric, ContactGeneric>(contactB as ContactGeneric)
const dateRange = {startDate: Date.now(), endDate: Date.now()}
const dateRangeCopy = cloneGeneric(dateRange)
function printName(firstName: string, lastName?: string) {
    console.log(firstName.toUpperCase());
    if (lastName !== undefined) {
        console.log(lastName);
    }
}

printName("John")
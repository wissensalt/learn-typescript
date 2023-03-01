function printId(id: number | string) {
    console.log("Your ID is : ", id)
}

printId("123")
printId(456)


function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello", x.join(" and "));
    } else {
        console.log("Welcome lone traveler", x);
    }
}

welcomePeople("John");
welcomePeople(["John", "Doe"])
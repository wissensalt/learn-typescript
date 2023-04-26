import {randomString} from "../../shared/build/src/utils";

class App {
    id: string;
    name: string;
    constructor() {
        this.id = randomString();
    }
}

console.log(new App())
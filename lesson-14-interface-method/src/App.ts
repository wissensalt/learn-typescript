interface App {
    name: string;
    description: string;
    version: string;
    getDetail(): string;
}

const myApp: App = {
    name: "my-app",
    description: "typescript-app",
    version: "1.0.0",
    getDetail(): string {
        return this.name + "-" + this.description + "-" + this.version;
    }
}

console.log(myApp.getDetail());

class NewApp implements App {
    description: string;
    name: string;
    version: string;

    getDetail(): string {
        return this.name + "-" + this.description + "-" + this.version;
    }

}

const newApp = new NewApp();
newApp.name = "new-app";
newApp.description = "new-app-desc";
newApp.version = "2.0.0"
console.log(newApp.getDetail())
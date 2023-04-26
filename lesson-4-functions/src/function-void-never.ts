function consoleError(errorMessage: string): void {
    console.log(errorMessage);
}

function handleError(errorMessage: string): never {
    throw new Error(errorMessage);
}

consoleError("test console error");
handleError("test handle error")
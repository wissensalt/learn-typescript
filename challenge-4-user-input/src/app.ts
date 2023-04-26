const inputNumber = document.getElementById("txtNumber") as HTMLInputElement
const printButton = document.getElementById("btnPrint") as HTMLButtonElement
const outputNumber = document.getElementById("outputNumber") as HTMLOutputElement

function printNumber(): void {
    const number = parseFloat(inputNumber.value);
    outputNumber.textContent = number.toString();
    inputNumber.value = null;
}

printButton.addEventListener('click', printNumber);
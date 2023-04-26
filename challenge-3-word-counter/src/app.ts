import * as promptSync from 'prompt-sync';

function calculateWords(sentence: string): number {
    if (sentence.length == 0) {
        return 0;
    }

    const words = sentence.split(" ");

    return words.length;
}

const prompt = promptSync();
const sentence = prompt("Please input a sentence : ");
console.log(`Your sentence is ${sentence} it contains ${calculateWords(sentence)} words`);
class SimpleTextProcessor {
    constructor(text) {
        this.text = text.trim();
    }

    toUpperCase = () => {
        return this.text.toUpperCase();
    }

    toLowerCase = () => {
        return this.text.toLowerCase();
    }

    reverseText = () => {
        return this.text.split('').reverse().join('');
    }

    deleteExtraSpaces = () => {
        return this.text.replace(/\s+/g, ' ').trim();
    }

    countWords = () => {
        return this.text.split(' ').length; 
    }
}

const something1 = new SimpleTextProcessor(' Fortnite ');
console.log(something1.toLowerCase());
console.log(something1.deleteExtraSpaces());
console.log(something1.reverseText());
console.log(something1.countWords());
console.log(something1.toUpperCase());
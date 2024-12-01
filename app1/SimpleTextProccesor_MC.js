class SimpleTextProccesor 
{
    constructor(text) 
    {
        this.text = text;
    }

    toUpperCase = () => 
    {
        return this.text.toUpperCase();
    }

    
    toLowerCase = () => 
    {
        return this.text.toLowerCase();
    }
    
    reverseText = () => 
    {
        return this.text.split('').reverse().join('');
    }
    
    deleteText = () => 
    {
        return this.text.trim();
    }
    
    CountWords = () => 
    {
        return this.text.split(' ').length; 
    } ;
}

const something = new SimpleTextProcessor(' Fortnite ');
console.log(something.toLowerCase());
console.log(something.deleteText());
console.log(something.reverseText());
console.log(something.CountWords());
console.log(something.toUpperCase());
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

const something = new SimpleTextProcessor(' Fortnite ');
console.log(something.toLowerCase());
console.log(something.deleteExtraSpaces());
console.log(something.reverseText());
console.log(something.countWords());
console.log(something.toUpperCase());
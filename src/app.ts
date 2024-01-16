const animals: string[] = ['apa', 'orangutang', 'gorilla', 'get', 'giraff'];

console.log(animals);

type RandomShitType = {
    string: string;
    number: number;
    bool: boolean;
};

const randomShit: RandomShitType = {
    string: 'w0rd',
    number: 27,
    bool: false,
};

console.log(randomShit);

const person: string = 'Philip'

function wordReturner(name: string): string {
    return `Hej ${name}`
};

console.log(wordReturner(person));

for (let i = 0; i < animals.length; i++) {
    console.log(wordReturner(animals[i]));
}
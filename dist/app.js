const animals = ['apa', 'orangutang', 'gorilla', 'get', 'giraff'];
console.log(animals);
const randomShit = {
    string: 'w0rd',
    number: 27,
    bool: false,
};
console.log(randomShit);
const person = 'Philip';
function wordReturner(name) {
    return `Hej ${name}`;
}
;
console.log(wordReturner(person));
for (let i = 0; i < animals.length; i++) {
    console.log(wordReturner(animals[i]));
}

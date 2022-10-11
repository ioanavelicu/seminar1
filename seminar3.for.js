/*function occurences(text, character) {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

console.log(occurences("sample text", "e"));*/


/*function occurences(text, character) {
    return text.split(character).length - 1
}

console.log(occurences("sample text", "e"))*/

/*let occurences = (text, character) => text.split(character).length - 1;
console.log(occurences("sample text", "e"))*/

let numere = [2, 4, 6, 7, 8]
function nrPare(vector) {
    let rezultat = [];
    for(var i = 0; i < vector.length; i++) {
        if(vector[i] % 2 == 0) {
            rezultat.push(vector[i])
        }
    }
    return rezultat
}
console.log(nrPare(numere))
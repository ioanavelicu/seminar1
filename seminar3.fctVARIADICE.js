/*function addToArray() {
    let args = arguments;
    let array = args[0];

    for ( var i = 1; i < args.length; i++) {
        array.push(args[i]);
    }
    return array;
}

let array = ["a", "tw"]
console.log(addToArray(array, "b", "c").join(", "))*/

/*function addToArray(array, ...args) {
    for ( var i = 0; i < args.length; i++) {
        array.push(args[i])
    }
    return array;
}

let array = ["a"]
console.log(addToArray(array, "b", "c").join(", "))*/

function nrPare(array,...args) {
    for ( var i = 0; i < args.length; i++) {
        array.push(args[i])
    }
    return array;
}
let array1 = []
console.log(nrPare(array1, 2, 5, 6, 7))
let array2 = []
console.log(nrPare(array2, 2, 5, 6, 7, 9, 10))
let array3 = []
console.log(nrPare(array3, 2))
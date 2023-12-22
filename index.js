// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
]
function destructivelyAppendCat(){[
    cats.push("Ralph")
]}
function destructivelyPrependCat(){[
    cats.unshift("Bob")
]}
function destructivelyRemoveLastCat(){[
    cats.pop()
]}
function destructivelyRemoveFirstCat(){[
    cats.shift()
]}
function appendCat(name){
    var firstCat = [...cats];
    firstCat.push(name)
    return firstCat
};
function prependCat(name){
    var lastCat = [...cats];
    lastCat.unshift(name)
    return lastCat
};
function removeLastCat(){
    var deleteLastCat = [...cats];
    deleteLastCat.pop()
    return deleteLastCat 
};
function removeFirstCat(){
    var deleteFirstCat = [...cats];
    deleteFirstCat.shift()
    return deleteFirstCat
};
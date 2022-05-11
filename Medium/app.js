
const array = [1,4,6,3,7,5];
let target = prompt("Find the number you want to find it.");
findIndex = (array, target) => {
    console.log(` The index of the ${target} is ${array.indexOf(Number(target))}`);
}

findIndex(array, target);
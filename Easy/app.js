//Write a function that takes in an array of numbers and outputs the average of all the numbers. 


let numArray = [4, 6, 10, 8, 13];
avgArray = (array) => {
    let add = 0;
    for (i =0; i < array.length; i++){
        add += array[i];        
    }
    console.log(`The average of the array is ${add/array.length}`);
}  
avgArray(numArray);
// Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

let checkElementExists = (element, array) => {
    for (let i = 0 ; i <= array.length; i++){
        if (JSON.stringify(array[i]) === JSON.stringify(element) || 
            JSON.stringify(array[i]) === JSON.stringify(element.reverse()) )
            return true;
    }
    return false;
};

let answer = (numArray, sum) => {
    let resultArray = [];
    let counter = 0;
    for (let i = 0; i < numArray.length; i++){
        for (let j = i+1; j < numArray.length; j++){
            if (numArray[i] + numArray[j] === sum){
                let sumDigits = [numArray[i],numArray[j]];
                if (!checkElementExists(sumDigits,resultArray)){
                    resultArray.push(sumDigits);
                    counter++;
                    }
                }
            }
        }
    switch (counter){
        case 0: 
            return "No combinations found";
        case 1: 
            return resultArray[0];
        default:
            return resultArray;
    }
};


answer([1,2,3], 4);
//[1,3]

answer([1,1,3,4,5,6,8,9,3,2,3,1,1,4,5,0,2],6);
//[[5,1],[3,3],[2,4],[6,0]]
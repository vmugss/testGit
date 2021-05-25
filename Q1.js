// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


let sortItems = (arrayOfType, type) => {
    let sortedArray = type === "number" ? arrayOfType.sort((a,b) => a - b) : arrayOfType.sort();
    let cleanArray = [];
    let i = 0;
    while (i < sortedArray.length){
        let lastIndex = sortedArray.lastIndexOf(sortedArray[i]);
        if (i === lastIndex)
            cleanArray.push(sortedArray[i]);
        else   
            cleanArray.push(sortedArray.slice(i,lastIndex + 1));
        i = lastIndex + 1;
    }
    return cleanArray;
};



let cleanUp = (array) => {
    let numberArray = [];
    let stringArray = [];
    let finalArray = [];
    let sortedNumberArray;
    let sortedStringArray;
    array.forEach(item => typeof item === "number" ? numberArray.push(item) : stringArray.push(item));
    if (numberArray.length > 0){
        sortedNumberArray = sortItems(numberArray, "number");  
        if (stringArray.length === 0) 
            return sortedNumberArray;
    } 
    if (stringArray.length > 0 ){
        sortedStringArray = sortItems(stringArray, "string");
        if (numberArray.length === 0)
            return sortedStringArray;
    }  
    finalArray.push(sortedNumberArray);
    finalArray.push(sortedStringArray);
    return finalArray;
};



cleanUp([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]);
cleanUp([1, "2", "3", 2]);
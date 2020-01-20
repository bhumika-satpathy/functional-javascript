function filterArray(inputArray){
    if(inputArray===[])return [];
    return inputArray.filter((input)=>input.message.length<=50).map((inputt)=>inputt.message);
}

module.exports=filterArray;
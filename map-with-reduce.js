function mapWithReduce(numbers,fn){
    return numbers.reduce((newNumbers,number,id,numbers)=>{
        newNumbers.push(fn(number,id,numbers));
        return newNumbers;
    },[])
}

module.exports=mapWithReduce;
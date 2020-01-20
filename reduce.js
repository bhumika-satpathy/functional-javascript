function reduce(inputArray){
    return inputArray.reduce((mapp,input)=>{
        mapp[input]=++mapp[input] || 1
        return mapp;
    },{});
}

module.exports=reduce;
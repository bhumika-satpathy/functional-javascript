function repeat(repeaterFunction,num){
    if(num==0)return;
    repeaterFunction();
    repeat(repeaterFunction,--num);
}

module.exports=repeat;
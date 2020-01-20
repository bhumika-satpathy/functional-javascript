function duckOrNot(...args){
    return args.reduce((cnt,input)=>{
        cnt+=input.hasOwnProperty('quack');
        return cnt;
    },0);
}

module.exports=duckOrNot;
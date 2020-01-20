function partialApp(namespace){
    return function(...args){
        console.log.apply(console,[namespace].concat(args));
    }
}

module.exports=partialApp;
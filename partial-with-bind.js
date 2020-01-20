function withBind(namespace){
    return console.log.bind(null,namespace);
}

module.exports=withBind;
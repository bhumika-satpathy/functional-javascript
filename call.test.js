const result=require('./call');

describe('The call function: ',()=>{
    it('should return a number',()=>{
        var notDuck = Object.create({quack: true})
        var duck = {quack: true};

        const res=result(notDuck,duck);
        expect(typeof res).toBe('number');
    });

    it('should return the number of objects having "quack" property',()=>{
        var notDuck = Object.create({quack: true})
        var duck = {quack: true};

        const res=result(notDuck,duck);
        expect(res).toBe(1);
    })
})
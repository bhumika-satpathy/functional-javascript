const result=require('./hello-world.js');

describe('The function hello-world:',()=>{
    it('should return a string',()=>{
        const res=result("str");
        expect(typeof res).toBe('string');
    });
    it('should return the input uppercased',()=>{
        const res=result('str');
        expect(res).toEqual('STR');
    });
})
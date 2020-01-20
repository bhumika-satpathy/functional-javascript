const result=require('./reduce');

describe('The reuce function: ',()=>{
    it('should return an object',()=>{
        let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
        const res=result(inputWords);
        expect(typeof res).toBe('object');
    })

    it('should return the correct number of occurances of each element of the array. ',()=>{
        let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
        const res=result(inputWords);
        expect(res.Apple).toEqual(2);
        expect(res.Banana).toEqual(1);
        expect(res.Durian).toEqual(3);
    })

    it('should return an empty object if the the input array is empty. ',()=>{
        let inputWords = []
        const res=result(inputWords);
        expect(res).toEqual({});
    })
})
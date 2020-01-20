const result=require('./map');

describe('The map function: ',()=>{
    it('should double each element inside the array. ',()=>{
        let numbers=[1,2,3,4,5];
        const res=result(numbers);
        expect(res).toEqual([2,4,6,8,10]);
    });

    it('should return an array of numbers: ',()=>{
        let numbers=[1,2,3,4,5];
        const res=result(numbers);
        expect(Array.isArray(res)).toBe(true);
    });

    it('should return nothing if any value defined within the input array is not between 0 and 20. ',()=>{
        let numbers=[1,2,3,4,5];
        numbers.forEach(element=>{
            expect(element).toBeLessThan(9);
            expect(element).toBeGreaterThan(0);
        })
    })

    it('The number of integer elements in he array should be between 0 and 20. ',()=>{
        let numbers=[1,2,3,4,5];
        expect(numbers.length).toBeLessThan(20);
        expect(numbers.length).toBeGreaterThan(0);
    })

})
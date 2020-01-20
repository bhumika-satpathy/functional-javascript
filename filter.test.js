const result=require('./filter');

describe('The filter function: ',()=>{
    it('should return an array',()=>{
        const inputArray=[
            obj1={message: 'Hey There! Wassup?'},
            obj2={message: 'jhasxcvbnm,./.kjhgfqwertyu;lkjhfdsazxcvbnm,mnbvcxzasdfghjkl;poiuytrewq'}
        ]
        const res=result(inputArray);
        expect(Array.isArray(res)).toBe(true);
    })

    it('should return an array of messages each of whose length is less that or equal to 50. ',()=>{
        const inputArray=[
            obj1={message: 'Hey There! Wassup?'},
            obj2={message: 'jhasxcvbnm,./.kjhgfqwertyu;lkjhfdsazxcvbnm,mnbvcxzasdfghjkl;poiuytrewq'}
        ]
        const res=result(inputArray);
        res.forEach(element => {
            expect(element.length).toBeLessThan(50);
        });
    })

    it('should return nothing if the array is empty. ',()=>{
        const inputArr=[];
        const res=result(inputArr);
        expect(res).toEqual([]);
    })
})
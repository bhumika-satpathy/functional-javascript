const result=require('./repeat');

describe('The repeat function: ',()=>{
    it('should return nothing ',()=>{
        function repeaterFunction(){
            // called function
        }
        const res=result(repeaterFunction,5);
        expect(typeof res).toBe('undefined');
    })

    it('should execeute the function num times',()=>{
        function repeaterFunction(){
            //repeater function
        }
        repeaterFunction=jest.fn();
        const res=result(repeaterFunction,5);
        expect(repeaterFunction).toHaveBeenCalledTimes(5);
    })
})
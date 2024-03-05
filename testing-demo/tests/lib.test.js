const lib=require('../lib')
const db=require('../db')
describe('absolute',()=>{
    it('absolute - positive',()=>{
        const result=lib.absolute(1)
        expect(result).toBe(1);
    })
    test('absolute - negative',()=>{
        const result=lib.absolute(-1)
        expect(result).toBe(1);
    })
    it('absolute - zero',()=>{
        const result=lib.absolute(0)
        expect(result).toBe(0);
    })
})
describe('greet',()=>{
    it('should return message',()=>{
        const result=lib.greet('Kausic')
        expect(result).toMatch(/Kausic/) // tocontain
    })
})
describe('getcurrencies',()=>{
    it('should return currencies',()=>{
        const result=lib.getCurrencies()
        //expect(result).toBeDefined();
        // expect(result).not.tobeNull()

        //expect(result).toContain('USD')
        expect(result).toEqual(expect.arrayContaining(['USD','EUR']))
    })
})
describe('getproduct',()=>{
    it('should return product',()=>{
        const result=lib.getProduct(1)
        //expect(result).toBeDefined();
        // expect(result).not.tobeNull()

        //expect(result).toContain('USD')
        expect(result).toEqual({id:1,price:10}) // tomatchobject //tohaveproperty
    })
})
describe('registeruser',()=>{
    it('should throw username false',()=>{
        //const result=lib.registerUser(null)
        //expect(result).toBeDefined();
        // expect(result).not.tobeNull()

        //expect(result).toContain('USD')
        const args=[null,undefined,NaN,'',0,false]
        args.forEach(a=>{
            expect(()=>{lib.registerUser(a)}).toThrow();
        })
       
    })
    it('should return object',()=>{
        const result=lib.registerUser('kausic')
        expect(result).toMatchObject({username:'kausic'})
        expect(result.id).toBeGreaterThan(0);
    })
})
describe('applydiscount',()=>{
    it('discount',()=>{
        const order={customerId:1,totalPrice:10}
        db.getCustomerSync=jest.fn().mockReturnValue({id:1,points:20})
        lib.applyDiscount(order)
        expect(order.totalPrice).toBe(9)
    })
})
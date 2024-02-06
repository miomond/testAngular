import { MoneyPipe } from "./money.pipe";

describe('test money pipe', () => {
  let moneyPipe: any;
  beforeEach(()=>{
    moneyPipe= new MoneyPipe();
  })
//   case one
it('test if it accept string',()=>{
    // expect(moneyPipe.transform(12)).toBe('number')
})
// case 2 
it('test if we pass 10 it will be 600',()=>{
    expect(moneyPipe.transform(10)).toEqual(600)
})
});

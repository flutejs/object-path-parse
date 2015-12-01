import parse from '../lib/index'


describe('object', () => {

  it('object property', () => {
    
    
    expect(parse("a.b['1.2\"']")).toEqual(["a","b","1.2\""])
    expect(parse("a.b")).toEqual(["a","b"])
    expect(parse("0.1")).toEqual(["0","1"])
    expect(parse("1[0].b")).toEqual(["1","0","b"])
    expect(parse("1")).toEqual(["1"])
    expect(parse("a[''][0]")).toEqual(["a","","0"])

    expect(()=>{
      parse()
    }).toThrow()

    expect(()=>{
      parse("")
    }).toThrow()

    expect(()=>{
      parse("]")
    }).toThrow()
    expect(()=>{
      parse("a[")
    }).toThrow()
    
  })




})
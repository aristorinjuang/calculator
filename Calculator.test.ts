import Calculator from './Calculator'

describe('basic calculation', () => {
  let calculator = new Calculator()

  it('should be defined', () => {
    expect(calculator).toBeDefined()
  })
  
  it('should add numbers', () => {
    calculator.add(5)
  
    expect(calculator.equal()).toBe(5)
  })
  
  test('1 + 1 = 2', () => {
    calculator.add(1)
    calculator.add(1)
  
    expect(calculator.equal()).toBe(2)
  })

  it('should subtract numbers', () => {
    calculator.add(1)
    calculator.subtract(1)

    expect(calculator.equal()).toBe(0)
  })

  it('should have a defined base value', () => {
    let calculator = new Calculator(1)

    expect(calculator.equal()).toBe(1)
  })

  it('should multiply numbers', () => {
    let calculator = new Calculator(2)

    calculator.multiply(2)

    expect(calculator.equal()).toBe(4)
  })

  it('should divide numbers', () => {
    let calculator = new Calculator(8)

    calculator.divide(2)

    expect(calculator.equal()).toBe(4)
  })

  test('3 * 3 = 9', () => {
    let calculator = new Calculator(3)

    calculator.multiply(3)

    expect(calculator.equal()).toBe(9)
  })

  test('81 / 9 = 9', () => {
    let calculator = new Calculator(81)

    calculator.divide(9)

    expect(calculator.equal()).toBe(9)
  })
})
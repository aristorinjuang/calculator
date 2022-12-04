export default class Calculator {
  private _value: number = 0

  constructor(value?: number) {
    if (value !== undefined) {
      this._value = value
    }
  }

  public add(value: number): void {
    this._value += value
  }

  public subtract(value: number): void {
    this._value -= value
  }

  public multiply(value: number): void {
    this._value *= value
  }

  public divide(value: number): void {
    this._value /= value
  }

  public equal(): number {
    let tmp = this._value;
    this._value = 0;
  
    return tmp;
  }
}
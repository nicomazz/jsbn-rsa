
export class BigInteger {
    bitLength(): number;
    clone(): BigInteger;
    divide(n: BigInteger): BigInteger;
    intValue(): number;
    mod(a: BigInteger): BigInteger;
    modInverse(m: BigInteger): BigInteger;
    multiply(n: BigInteger): BigInteger;
    pow(e: number): BigInteger;
    shiftLeft(n: number): BigInteger;
    subtract(n: BigInteger): BigInteger;
    toByteArray(): number[];
    toString(b: number): string;

    constructor(a: ArrayLike<number>);
}

declare class RSAKey {
  n: BigInteger;
  e: number;

  setPublic(n: string, e: string): void;
  setPrivateEx(
      n: string, e: string, d: string, p: string, q: string, dp: string,
      dq: string, c: string): void;
  doPrivate(x: BigInteger): BigInteger;
}
      


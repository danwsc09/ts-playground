interface MyObj {
  a: string;
  b: number;
  c: {
    name: string;
  };
}

type MyType = keyof MyObj;

type MyValues = MyObj[MyType];
type MyValuesIsh = MyObj["a" | "c"];

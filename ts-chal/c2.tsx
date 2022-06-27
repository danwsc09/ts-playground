export const getDeepValue = (obj: any, firstKey: string, secondKey: string) => {
  return obj[firstKey][secondKey];
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "12",
    d: 18,
  },
};

const value = getDeepValue(obj, "foo", "a");

/**
 * Challenge: how do you change the types on getDeepValue so that it knows what the type of the result will be?
 * Ex. const value = getDeepValue(obj, "foo", "a");  // value should have type boolean
 * const value = getDeepValue(obj, "foo", "b"); // value should have type number
 */
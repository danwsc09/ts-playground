export const getDeepValue = <
  TObj,
  TFirstKey extends keyof TObj,
  TSecondKey extends keyof TObj[TFirstKey]
>(
  obj: TObj,
  firstKey: TFirstKey,
  secondKey: TSecondKey
) => {
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

const returnWhatIPassIn = <T>(val: T): T => {
  return val;
};

let res = returnWhatIPassIn(123);
let res1 = returnWhatIPassIn("hello, world");

// yarn add zod - for typing API responses where you don't know exactly what the type will be
// this will throw a runtime error if the types don't match

import { z } from "zod";

const Data = z.object({
  id: z.string(),
  name: z.string(),
});

type DataType = z.infer<typeof Data>;

// This won't throw any errors even if the API doesn't actually contain the field 'id' or 'name'
interface DataFromApi {
  id: string;
  name: string;
}

fetch("/something")
  .then((res) => res.json())
  .then((result) => {
    const data = Data.parse(result); // this is now typed, and will throw errors if API doesn't have these exact fields
  });

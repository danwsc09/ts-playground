// how to check if params (a, b) are arrays and prevent arrays
// using types, instead of isArray syntax?

export const deepEqualCompare = <Arg>(
  a: Arg extends any[] ? `Don't pass an array` : Arg,
  b: Arg
): boolean => {
  return a === b;
};

deepEqualCompare([], []);
deepEqualCompare("a", "b");

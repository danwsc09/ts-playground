// how to check if params (a, b) are arrays and prevent arrays
// using types, instead of isArray syntax?

export const deepEqualCompare = <Arg>(a: Arg, b: Arg): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error("You cannot compare two arrays using deepEqualCompare");
  }
  return a === b;
};

type Animal = {
  name: string;
};

type Human = {
  firstName: string;
  lastName: string;
};

/*
const getRequiredInformation = <T>(input: T): GetRequiredInformation<T> => {
  if ((<Animal>(<unknown>input)).name) {
    return { age: 12 };
  } else {
    return { ssn: "asdfasdf" };
  }
};
*/

type GetRequiredInformation<TType> = TType extends Animal
  ? { age: number }
  : TType extends Human
  ? { ssn: string }
  : never;

export type RequiredInformationForAnimal = GetRequiredInformation<Animal>;

export type RequiredInformationForHuman = GetRequiredInformation<Human>;

// how to type GetRequiredInformation so that
// for humans, we need to get their SSN field, and
// for animals, we need to get their age field?

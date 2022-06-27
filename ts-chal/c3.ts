type Animal = {
  name: string;
};

type Human = {
  firstName: string;
  lastName: string;
};

type GetRequiredInformation<TType> = TType;

export type RequiredInformationForAnimal = GetRequiredInformation<Animal>;

export type RequiredInformationForHuman = GetRequiredInformation<Human>;

// how to type GetRequiredInformation so that
// for humans, we need to get their SSN field, and
// for animals, we need to get their age field?

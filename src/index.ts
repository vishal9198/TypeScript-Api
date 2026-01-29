//ReadOnly

type User = {
  name: String;
  age: number;
};

type Customer = {
  name: String;
  age: number;
  readonly id: number;
};

const user: Readonly<User> = {
  name: "lqiwhefi",
  age: 12,
};
user.name = "fe";

const customer: Customer = {
  name: "de",
  age: 2,
  id: 32,
};

customer.id = 3;

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

function updateUser(updateProps: UpdateProps) {
  // hit the nackend for the data base call and now you only can update name,age,email
}

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;
//case 1
// interface updatePropsOptional {
//     name?: string;
//     age?: number;
//     email?: string;
// }

//case 2
type updatePropsOptional = Partial<UpdateProps>;

function updateUser(updateProps: updatePropsOptional) {
  // hit the nackend for the data base call and now you only can update name,age,email
}
updateUser({ name: "new name" });

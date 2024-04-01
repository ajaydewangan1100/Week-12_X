{interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  password: string;
}

//PICK - For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, "name" | "email" | "password">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({ name: "abc", email: "a@agmail.com", password: "asdf" });

//--------------------------------------------------------------------------
// PARTIAL - we can give partial values
type UpdateProps = Pick<User, "name" | "password" | "email">;

type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatedProps: UpdatePropsOptional) {
  // hit the database to update the user
}

updateUser({ name: "abc" });

//--------------------------------------------------------------------------
// READONLY -
}
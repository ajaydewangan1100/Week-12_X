// UGLY WAY
interface User {
  id: string;
  name: string;
}

type Users = { [key: string]: User };

const users1: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

// ---------------------------------------------------------------

// RECORD - GOOD WAY
interface User {
  id: string;
  name: string;
}

// 1ST way
type UsersRecord = Record<string, User>;
// 2ND way
type UsersRecord2 = Record<string, { id: string; name: string }>;

const users2: UsersRecord = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users2["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// MAP - in JS
const users3 = new Map();

// setting values -
users3.set("abc123", { id: "abc123", name: "John Doe" });
users3.set("xyz789", { id: "xyz789", name: "Jane Doe" });

// getting
console.log(users3.get("abc123"));

// -----------------------------------------------------------

// MAP - in TS
interface UserMap {
  id: string;
  name: string;
  email: string;
}
const usersMap = new Map<string, UserMap>();

usersMap.set("ras@tr", { id: "ras@tr", email: "abc", name: "abc" });
usersMap.set("rasa@twr", { id: "rasa@twr", email: "azyx", name: "sfac" });

const userData = usersMap.get("rasa@twr");

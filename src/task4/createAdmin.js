export function createAdmin() {
  let user = { name: 'John' };
  const age = prompt("Enter user's age:");
  user.age = age;

  let admin = { ...user };
  admin.role = 'admin';

  return admin;
}

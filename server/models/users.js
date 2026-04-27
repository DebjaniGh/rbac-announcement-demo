// In-memory "database" of users.
// In a real app this would be a database table.
// Passwords are plain text ON PURPOSE — Milestone 4 will introduce JWT,
// and a later milestone could add hashing. Right now we focus on the FLOW.
const users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "editor", password: "editor123", role: "editor" },
  { id: 3, username: "viewer", password: "viewer123", role: "viewer" },
];

module.exports = users;

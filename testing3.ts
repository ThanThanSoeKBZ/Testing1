// Define an interface for a User
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// Create an array of users
const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", isActive: true },
];

// Function to get all active users
function getActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive);
}

// Function to print user info
function printUsers(users: User[]): void {
    users.forEach(user => {
        console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
}

// Usage
const activeUsers = getActiveUsers(users);
printUsers(activeUsers);

type Name = string;

export function greet(name: Name): string {
    return `Hello, ${name}!`;
}

export function farewell(name: Name): string {
    return `Goodbye, ${name}!`;
}

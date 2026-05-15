const thisIsInternal = "string ok";

export function greet(name) {
    return `Hello, ${name}!`;
}

const internalFunction = () => {
    console.log(thisIsInternal);
};

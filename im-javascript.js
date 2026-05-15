const thisIsInternal = "string ok";

export function greet(name) {
    return `Hello, ${name}!`+' You are welcome!';
}

const internalFunction = () => {
    console.log(thisIsInternal);
};

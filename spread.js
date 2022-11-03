const a = [1, 2, 3];
const b = [4, 5, 6];

// const c = a.concat(b); // normal

const c = [...a, ...b]; // spread operator

console.log(c);

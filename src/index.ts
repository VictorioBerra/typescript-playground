let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

let { a, ...passthrough } = o;

console.log(passthrough);

let o = {
    a: "foo",
    b: 12,
    c: "bar",
    1:2
};

let { a, ...passthrough } = o;

console.log(passthrough);

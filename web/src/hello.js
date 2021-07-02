const importObject = {
    env: {
        print_i: console.log,
    },
};

// Object to init.
let _obj;

// Must be called and awaited first before calling print_int or sum.
function init() {
    return fetch('./src/hello.wasm').then(async (response) => {
        const buffer = await response.arrayBuffer();
        _obj = await WebAssembly.instantiate(buffer, importObject);
    });
}

// Prints an integer to console.log.
function print_int(i) {
    const PRINT_INT = _obj.instance.exports.print_int;
    PRINT_INT(i);
}

// Computes sum of two integers, prints to console.log, and returns result.
function sum(a, b) {
    const SUM = _obj.instance.exports.sum;
    return SUM(a, b);
}
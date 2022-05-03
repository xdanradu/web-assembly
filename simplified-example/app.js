var importObject = {
    imports: {
        imported_func: function(arg) {
            console.log(arg);
        }
    }
};

fetch('index.wasm').then(response =>
    response.arrayBuffer()
).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
).then(result =>
    result.instance.exports.exported_func()
);

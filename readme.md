# Web component example using C language on Windows

####1. Install emsdk (https://emscripten.org/docs/getting_started/downloads.html)

####2. Go to emsdk the installation folder and run emsdk_env.bat

```shell script
cd c:\emsdk
emsdk_env.bat
```

####3. Go to the JS web component folder and compile the C file (index.c) into JS:

```shell script
cd c:\Workspace\web-assembly\src
emcc index.c -o index.html
```

####4. Serve the generated index.html (ex: live-server)

####5. Or check and serve the simplified-example


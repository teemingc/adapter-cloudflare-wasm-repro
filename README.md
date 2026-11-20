# adapter-cloudflare-wasm-repro

A dependency that imports a `.wasm` file under its `workerd` export condition fails in `vite dev` and `vite build` since `@sveltejs/adapter-cloudflare@8.0.3`.

```bash
npm install
npm run dev # GET / responds with 500
npm run build # fails
```

`src/routes/+server.js` renders an image with `takumi-js`, which imports its `.wasm` file when resolved with the `workerd` condition.

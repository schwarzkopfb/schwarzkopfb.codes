import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();

app.use((ctx) => {
    const { pathname, search, hash } = ctx.request.url;
    ctx.response.redirect(`https://github.com/schwarzkopfb${pathname}${search}${hash}`);
});

app.addEventListener("listen", () => console.log('server is ready to accept connections on port 8080'));

await app.listen({ port: 8080 });

import { Application, Router } from "https://deno.land/x/oak/vincenzoooooo/mod.ts";
import * as render from './blog.js'

const posts = [
    { id: 0, title: 'ggg', body: 'ggggg', created_at:new Date() },
    { id: 1, title: 'yyy', body: 'yyyyy', created_at:new Date() },
    { id: 2, title: '111', body: '11111', created_at:new Date() }
];

const router = new Router();

router.get('/', list)
    .get('/post/new', add)
    .get('/post/:id', show)
    .post('/post', create);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function list(ctx) {
    ctx.response.body = await render.list(posts);
}

async function add(ctx) {
    ctx.response.body = await render.newPost();
}

async function show(ctx) {
    const id = ctx.params.id;
    const post = posts[id];
    if (!post) ctx.throw(404, 'invalid post id');
    ctx.response.body = await render.show(post);
}

async function create(ctx) {
    const body = ctx.request.body
    if (body.type() === "form") {
        const pairs = await body.form()
        const post = {}
        for (const [key, value] of pairs) {
            post[key] = value
        }
        console.log('post=', post)
        const id = posts.push(post) - 1;
        post.created_at = new Date(); 
        post.id = id;
        ctx.response.redirect('/');
    }
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });

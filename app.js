
let Koa = require('./src/application');

let app = new Koa();

app.use(async (ctx, next) => {
    console.log(1);
    await next();
    console.log(6);
});

app.use(async (ctx, next) => {
    console.log(2);
    await next();
    console.log(5);
});

app.use(async (ctx, next) => {
    console.log(3);
    ctx.body = "success";
    console.log(4);
});

app.on('error', err => {
    console.log('error: ', err);
});

app.listen(3001, () => {
    console.log('listenning on 3001');
});
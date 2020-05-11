const router = require('./index')
router.get( '/get_code', (ctx, next) => {
    let id = ctx.request.query.id
    ctx.body = {
         id,
         code: 200
    }
});
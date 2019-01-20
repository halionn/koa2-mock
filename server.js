/**
 * mock server
 * @author jinhailiang
 * @date 2019/1/5
 */
'use strict'

import koa from 'koa2'
import koaRouter from 'koa-router'
import koaBody from 'koa-body'
import cors from 'koa2-cors'
import { voteList } from './data/S244/index.js'

const app = new koa()
const router = koaRouter()

app.use(cors({
    origin(ctx) {
        return '*'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

router.post('/api/vote/getVoteList', async function (ctx) {
    const { i, c } = ctx.request.body
    ctx.response.body = voteList(i, c)
})

app.use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())
app.listen(3000)

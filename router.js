
import Router from '@koa/router'

import * as users from './app/users/index.js'
import * as hunches from './app/hunches/index.js'
import * as games from './app/games/index.js'



export const router = new Router()
//router.get('/users', users.list)
router.get('/login', users.login)
router.post('/users', users.create)
router.post('/hunches', hunches.create)
router.get('/games', games.list)
router.get('/:username', users.hunches)
router.get('/users/hunches/:name', users.hunches);



//router.get('/users', users.list);






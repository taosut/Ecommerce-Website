const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['cart_auth'] = require('..\\middleware\\cart_auth.js')
middleware['cart_auth'] = middleware['cart_auth'].default || middleware['cart_auth']

middleware['loggedIn'] = require('..\\middleware\\loggedIn.js')
middleware['loggedIn'] = middleware['loggedIn'].default || middleware['loggedIn']

middleware['user_verify'] = require('..\\middleware\\user_verify.js')
middleware['user_verify'] = middleware['user_verify'].default || middleware['user_verify']

export default middleware

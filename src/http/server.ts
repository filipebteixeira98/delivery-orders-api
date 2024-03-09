import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => {
  return 'Hey there!'
})

app.listen(3333, () => {
  console.log('🔥 HTTP server is running at localhost:3333')
})

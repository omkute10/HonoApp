import { Hono } from 'hono'

const app = new Hono()


//c here stands for context of the application, it has all the req and res objects
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app

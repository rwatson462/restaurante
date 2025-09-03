import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma'
import dotenv from 'dotenv'

dotenv.config()

const app = new Hono()
const prisma = new PrismaClient()

app.get('/', (c) => {
  return c.json({ message: "ok" })
})

app.get('/health', (c) => {
  return c.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'restaurante-backend'
  })
})

const port = parseInt(process.env.PORT)
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})

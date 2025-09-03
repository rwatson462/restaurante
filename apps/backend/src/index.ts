import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma'
import dotenv from 'dotenv'

dotenv.config()

const app = new Hono()
const prisma = new PrismaClient()

app.get('/', async (c) => {
  try {
    await prisma.$connect()
    
    const restaurantCount = await prisma.restaurant.count()
    
    return c.json({
      success: true,
      message: 'Backend is running and connected to database',
      database: 'SQLite',
      restaurantCount
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return c.json({
      success: false,
      message: 'Failed to connect to database',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, 500)
  }
})

const port = process.env.PORT ? parseInt(process.env.PORT) : 4000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})
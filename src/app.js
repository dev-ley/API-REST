import express from 'express'
import routes from './routes.js'

const app = express()

// indicar para o express ler o body com Json
app.use(express.json())

// usar o routes
app.use(routes)

export default app
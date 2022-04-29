import express from 'express'
import { routes } from './routes'
import { initiFirebaseApp } from '../firebase'

initiFirebaseApp()

const app = express()
const port = 8888 || process.env.PORT

app.use(express.json())
app.use(routes)

app.listen(port, () => {
	console.log('Server is running')
})
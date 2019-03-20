import express from 'express'
import Debug from 'debug'
const app = express.Router()
const debug = new Debug("sw0910:root")
const question = {
    id: 1,
    title: '¿Cómo reutilizo un componente de Angualr',
    description: 'Miren esta es mi pregunta.....',
    createdAt: new Date(),
    icon: 'devicon-angularjs-plain',
    answers: [],
    user: {
        firstName: 'Rafa',
        lastName: 'Montes de oca',
        email: 'rafa@upsrj.com',
        password: '123456'
    }
}

const questions = new Array(10).fill(question)

// /api/questions/
app.get('/', (req, res) => {
    debug('New request')
    res.status(200).json(questions)
})

// /api/questions/:id
app.get('/:id', (req, res) => res.status(200).json(question))

export default app
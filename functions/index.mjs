import express  from "express"
import ServerlessHttp from "serverless-http"

const router = express.Router()
const app = express()

//http://localhost:8888/.netlify/functions/index

router.get('/', (request, response) =>{
  const games = {
     name: 'e'
    }

  return response.json(games)
})

app.use('/', router)

module.exports.handler = ServerlessHttp(app)

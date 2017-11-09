require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handler = require('./handler')

// parse body
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

app.get('/', (req, res) => res.send('Audio Formatting Service is up :D! Make use of it by posting with param \'url\''))

app.post('/', (req, res, next) => {
  if (!req.body.url) {
    return res.send('No audio url!')
  }
  // console.log('handler(req.body.url)', handler(req.body.url))
  handler(req.body.url)
    .then(savedUrl => {
      console.log(`audio file is processed and saved to ${savedUrl}`)
      res.send(`Success: Audio file is formatted and saved ${savedUrl}`)
      // return savedUrl
    })
    .catch(err => {
      console.error('err', err)
      next(err)
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const convertAudioToWav = require('./handler')
// parse body
app.use(bodyParser.json())       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

app.get('/', (req, res) => res.send('Audio Formatting Service is up :D'))

app.post('/', (req, res) => {
  if (!req.body.url) {
    return res.send('No audio url!')
  }
  convertAudioToWav(req.body.url)
    .then(result => {
      console.log('result', result)
    })
//   console.log('req', req)
//   console.log('req', Object.keys(req))
//   console.log('req.body', req.body)
//   console.log('req.params', req.params)
  res.send('Got a POST request')
})

app.listen(3000, () => console.log('App listening on port 3000!'))

const convertAudioToWav = require('./convertAudioToWav')
const saveWavToOSS = require('./saveWavToOSS')

const handler = (audioUrl) => {
  return convertAudioToWav(audioUrl)
    .then(path => {
      console.log('path', path)
      return saveWavToOSS(path)
    })
}

module.exports = handler

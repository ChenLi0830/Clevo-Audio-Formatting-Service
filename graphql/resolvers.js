const convertAudioToWav = require('../convertAudioToWav')
const saveWavToOSS = require('../saveWavToOSS')
const {urlExists} = require('./helper')

const formatAudioFile = ({audioUrl, encoding, channel, sampleRate}) => {
  // check if url exist
  return urlExists(audioUrl)
    .then(exists => {
      if (!exists) throw new Error('audioUrl doesn\'t exist')
    })
    .then(() => {
      // format audio
      return convertAudioToWav({filePath: audioUrl, encoding, channel, sampleRate})
      .then(path => {
        console.log('path', path)
        return saveWavToOSS(path)
      })
    })
}

module.exports = {formatAudioFile}

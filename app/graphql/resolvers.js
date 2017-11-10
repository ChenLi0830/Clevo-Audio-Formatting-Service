const convertAudioToWav = require('../convertAudioToWav')
const saveWavToOSS = require('../saveWavToOSS')

const formatAudioFile = ({audioUrl, encoding, channel, sampleRate}) => {
  return convertAudioToWav({filePath: audioUrl, encoding, channel, sampleRate})
    .then(path => {
      console.log('path', path)
      return saveWavToOSS(path)
    })
}

module.exports = {formatAudioFile}

let path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const convertAudioToWav = (filePath, outputPath = './', encoding = 'pcm_s16le', channel = 1, sampleRate = 8000) => {
  let extension = path.extname(filePath)
  let baseName = path.basename(filePath, extension)

  return exec(`ffmpeg -i ${filePath} -vol 256 -acodec ${encoding} -ac ${channel} -ar ${sampleRate} ${outputPath}${baseName}.wav`)
    .then((result) => {
      console.log(`${outputPath}${baseName}.wav is generated`)
    })
    .catch(error => {
      console.error('error', error)
    })
}

module.exports = convertAudioToWav

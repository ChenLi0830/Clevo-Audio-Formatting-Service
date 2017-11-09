const ossClient = require('./ossClient')
let path = require('path')
const fs = require('fs')

const saveWavToOSS = (filePath) => {
  console.log('saveWavToOSS path', filePath)
  let fileName = path.basename(filePath)
  return ossClient.put(fileName, filePath)
    .then(result => {
      // remove local wav file
      fs.unlinkSync(filePath)

      if (result.res.statusCode === 200) {
        return result.url
      } else {
        throw new Error('file is not saved successfully')
      }
    })
}

module.exports = saveWavToOSS
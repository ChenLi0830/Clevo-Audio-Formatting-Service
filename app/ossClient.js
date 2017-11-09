var OSS = require('ali-oss').Wrapper

var client = new OSS({
// Todo: use external variables
//   region: 'oss-us-west-1',
  region: process.env.REGION,
  bucket: process.env.BUCKET,
  accessKeyId: process.env.ACCESS_KEY_ID,
  accessKeySecret: process.env.ACCESS_KEY_SECRET
})

module.exports = client

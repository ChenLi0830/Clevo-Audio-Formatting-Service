const { makeExecutableSchema } = require('graphql-tools')
const {formatAudioFile} = require('./resolvers')

const typeDefs = `
enum Encoding {
  pcm_s16le
}

type SavedAudio {
  url: String!
}

type Query {
  savedAudio: SavedAudio
}

type Mutation {
  formatAudioFile (
    audioUrl: String!
    encoding: Encoding
    channel: Int
    sampleRate: Int
  ): SavedAudio
}

schema {
  query: Query
  mutation: Mutation
}
`

const resolvers = {
  Query: {
    // savedAudio: (_, { id }) => find(authors, { id: id }),
  },
  Mutation: {
    formatAudioFile: (_, { audioUrl, encoding, channel, sampleRate }) => {
      return formatAudioFile({audioUrl, encoding, channel, sampleRate})
      .then(result => {
        console.log('result', result)
        return {url: result}
      })
    }
  }
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = executableSchema

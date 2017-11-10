const { makeExecutableSchema } = require('graphql-tools')
const {formatAudioFile} = require('./resolvers')

const typeDefs = `
type SavedAudio {
  url: String!
}

type Query {
  savedAudio: SavedAudio
}

type Mutation {
  formatAudioFile (
    audioUrl: String!
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
    formatAudioFile: (_, { audioUrl }) => {
      return formatAudioFile(audioUrl)
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

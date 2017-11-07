# Clevo-Audio-Formatting-Service
Clevo-Audio-Formatting-Service

### Development
`docker-compose up`


### Build
`docker image build --tag audio-formatting-service ./app/`

### Push
Login first:

`docker login`

Push to Docker Hub:

`docker image push clevo/audio-formatting-service`


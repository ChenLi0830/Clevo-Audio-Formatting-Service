# Clevo-Audio-Formatting-Service
The service formats audio file into `.wav` format and change the encoding to `PCM`. 

### Development
The service logic is under ./app directory. Once you finished working on the service, you can simply test it by running

`docker-compose up`

This command will spin up a docker container and run the service within it. You can then access the endpoint at

`http://localhost`

## Working with image
You would NOT want to modify the image unless:
1. You want to add OS level dependencies such as ffmpeg
2. I can't think of another case, add more later

### Build Image
`docker image build --tag audio-formatting-service ./app/`

### Push Image
Login Docker first:

`docker login`

Push the image to Docker Hub:

`docker image push clevo/audio-formatting-service`



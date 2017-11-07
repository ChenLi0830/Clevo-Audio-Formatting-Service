FROM node:8.9

# COPY ./package.json /application/package.json

# WORKDIR /application
RUN echo "deb http://ftp.uk.debian.org/debian jessie-backports main" >> /etc/apt/sources.list \
&& apt-get update \
&& apt-get install ffmpeg -y

EXPOSE 3000
# RUN npm install 

# # CMD [ "executable" ]

# # COPY ./app /app

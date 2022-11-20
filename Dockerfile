# Dockerfile

# base image
FROM node:18

# create & set working directory
WORKDIR /opt/app

# Copy the code
RUN mkdir -p /opt/app
ADD . /opt/app

# Install packages using Yarn
RUN cd /opt/app && yarn install

# build app
RUN cd /opt/app && yarn run build
# setup docker to expose our port
EXPOSE 3000
# Commands to be run when the image starts
CMD cd /opt/app && yarn run start
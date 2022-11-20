# Dockerfile

# base image
FROM node:16

# create & set working directory
WORKDIR /opt/app

# Install packages using Yarn
ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# Copy the code
ADD . /opt/app

# start app
RUN yarn run build
EXPOSE 3000
CMD yarn run start
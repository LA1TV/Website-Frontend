# Dockerfile

# base image
FROM node:16 as builder
# create & set working directory
WORKDIR /opt/app
# Install packages using Yarn
ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules
# Copy and build the code
ADD . /opt/app
RUN yarn run build

# Production image, copy all the files and run next
FROM node:16 AS runner
WORKDIR /opt/app

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/static ./static
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
COPY --from=builder /opt/app/package.json ./package.json

# ENV NEXT_TELEMETRY_DISABLED 1

# start app
EXPOSE 3000
CMD yarn run start
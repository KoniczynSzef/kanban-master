# Description: Dockerfile for bun

# import the bun image from the oven registry
FROM oven/bun:1 as base
WORKDIR /app

# copy the package.json to the container
COPY package*.json ./

# install the dependencies
RUN bun install

# copy everything to the container 
COPY . .

# build the app on the container
EXPOSE 3000
CMD [ "bun", "dev" ]
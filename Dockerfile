FROM oven/bun:1

WORKDIR /usr/src/app

COPY package.json ./

RUN bun install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD bun dev
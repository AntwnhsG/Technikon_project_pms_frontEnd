# Use an existing image as a base
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY ./src ./src
COPY ./public ./public

# Expose the port your app runs on
EXPOSE 3000

# Command to run the frontend application
CMD ["npm", "start"]

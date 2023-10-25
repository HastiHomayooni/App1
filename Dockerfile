# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the container port
EXPOSE 3000

# Set the command to run when the container starts
CMD [ "npm", "run", "start" ]
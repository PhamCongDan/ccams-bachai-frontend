# Use an official Node.js runtime as the base image
FROM node:14-alpine3.10 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the React app
RUN npm run build

# Use NGINX as the web server
FROM nginx:latest

# Copy the built React app from the previous stage to NGINX's default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]

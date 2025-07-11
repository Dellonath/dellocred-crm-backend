FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy backend files
COPY . /app

# Install backend dependencies
WORKDIR /app/dellocred-backend
RUN npm install

# Set working directory back to backend
WORKDIR /app/dellocred-backend

# Expose backend port
EXPOSE 3000

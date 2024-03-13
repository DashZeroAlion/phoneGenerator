#!/bin/bash

# Function to check for node_modules and run npm install if not present
check_and_install() {
  local dir=$1
  if [ ! -d "$dir/node_modules" ]; then
    echo "Installing dependencies in $dir..."
    (cd "$dir" && npm install)
  fi
}

# Check and install dependencies for server and client
check_and_install ./server
check_and_install ./client

# Start Docker containers (replace with your actual docker-compose or docker command)
docker-compose up -d

# Check if Docker containers started successfully (optional)
if [ $? -ne 0 ]; then
  echo "Failed to start Docker containers."
  exit 1
fi

# Run npm start script
npm start
# Application Startup Guide

This guide provides instructions on how to use the `start-app.sh` script to start the client, server, and Docker container for the application.

## Prerequisites

Before running the `start-app.sh` script, ensure that you have the following installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (if running the client and server outside of Docker)

## Usage

The `start-app.sh` script is designed to simplify the process of starting the application components. It can start the client and server directly on your host machine or within a Docker container.

### Starting the Application

1. Open a terminal window.
2. Navigate to the root directory of the application where the `start-app.sh` script is located.
3. Make the script executable by running the `chmod +x start-app.sh` command.
4. Run the script with the desired options by executing `./start-app.sh [options]`.
   Replace `[options]` with one of the following:
   - `client`: to start only the client application.
   - `server`: to start only the server application.
   - `docker`: to start both the client and server inside a Docker container.

### Example Commands
- To start everything, run `./start-app.sh`.
- To start the client, run `./start-app.sh client`.
- To start the server, run `./start-app.sh server`.
- To start both the client and server in a Docker container, run `./start-app.sh docker`.

## Stopping the Application

To stop the client and server, you can simply press `Ctrl+C` in the terminal where they are running.

For the Docker container, you can stop it by running the `docker stop [container_name]` command, replacing `[container_name]` with the actual name of the Docker container.

## Additional Information

- Ensure that the ports required by the client and server are available on your system.
- The `start-app.sh` script may have additional options or configurations depending on the application setup. Refer to the script comments for more details.

## Troubleshooting

If you encounter any issues while running the `start-app.sh` script, consider the following:

- Ensure that Docker is running on your system.
- Check if the ports required by the application are not already in use.
- Verify that you have the necessary permissions to execute the script.

For further assistance, please reach out to the support team or refer to the application documentation.

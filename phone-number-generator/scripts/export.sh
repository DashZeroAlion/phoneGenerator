#!/bin/bash

# Set the MongoDB URI and the name of the database you want to export
MONGO_URI="mongodb://127.0.0.1:27017"
DATABASE_NAME="phoneNumberGenerator"

# Set the directory where you want to save the backup
BACKUP_DIR="C:/dev/phone/phone-number-generator/data/"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Run mongodump to export the data
mongodump --uri="$MONGO_URI" --db="$DATABASE_NAME" --out="$BACKUP_DIR"

echo "MongoDB export completed."
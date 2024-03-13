#!/bin/bash

# Set the MongoDB URI and the name of the database you want to import into
MONGO_URI="mongodb://127.0.0.1:27017"
DATABASE_NAME="phoneNumberGenerator"

# Set the directory where your backup is located
BACKUP_DIR="C:/dev/phone/phone-number-generator/data/$DATABASE_NAME"

# Run mongorestore to import the data
mongorestore --uri="$MONGO_URI" --db="$DATABASE_NAME" "$BACKUP_DIR"

echo "MongoDB import completed."
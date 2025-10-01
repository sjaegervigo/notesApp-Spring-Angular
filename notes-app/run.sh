#!/bin/bash

echo "🚀 Starting full stack Notes App..."

# Verificar si Docker está instalado
if ! command -v docker &> /dev/null; then
  echo "❌ Docker is not installed. Please install it to continue."
  exit 1
fi

# Verificar si Docker está corriendo
if ! docker info &> /dev/null; then
  echo "❌ Docker isn't running. Please initialize Docker Desktop."
  exit 1
fi

# Ejecutar docker-compose
docker-compose up --build

# Build de Angular
FROM node:20.19.1 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production

# Imagen final con NGINX
FROM nginx:alpine

COPY --from=build /app/dist/notes-frontend/browser /usr/share/nginx/html

# (Opcional) configuración custom si necesitas SPA routing
# COPY nginx.conf /etc/nginx/nginx.conf

# Base image
FROM node:alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo en el contenedor
COPY . .

# Puerto expuesto por la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

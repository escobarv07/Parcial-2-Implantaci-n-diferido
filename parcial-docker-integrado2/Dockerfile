# 1. Usar la imagen base node:18-alpine 
FROM node:18-alpine

# 2. Establecer el directorio de trabajo 
WORKDIR /app

# 3. Copiar solo los archivos de dependencias 
COPY package.json package-lock.json ./

# 4. Instalar dependencias con npm ci (más rápido y seguro) 
RUN npm ci

# 5. Copiar el resto del código fuente 
COPY . .

# 6. Crear un usuario 'node' (el usuario 'node' ya existe en la imagen 'node:18-alpine')
# y cambiar a ese usuario para no correr como root 
USER node

# 7. Exponer el puerto 3000 
EXPOSE 3000

# 8. Comando para iniciar la aplicación 
CMD ["npm", "start"]

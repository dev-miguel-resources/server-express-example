# Directory Deployment
FROM node:alpine3.16 AS DEPLOYMENT

# Habilitar desde la terminal de la imagen, la factibilidad de descargas procesos desde una ruta remota
RUN apk add curl bash --no-cache

# Descargar el recurso de una ruta y vincularlo a la imagen
# El f significa forzar la instalación en un 100%
# La s significa el save o descarga del recurso
# La b significa que el recurso se está descargando mediante procesamiento binario
RUN curl -sf https://gobinaries.com/tj/node-prune | sh -s -- -b /usr/local/bin

# Especificación del directorio de la imagen
WORKDIR /build

# Copiamos el package.json
COPY package.json .

# Instalar los paquetes de node
RUN yarn install

# Copiamos los demás archivos al directorio de la imagen: WORKDIR
COPY . .

# Generar el build
RUN yarn run build

# Identificar el entorno --production para que el node prune tenga el contexto de las librerías productivas a partir del build generado
RUN yarn install --production

# Interceptar el contexto de las librerías y las optimizaremos a partir del node-prune descargado que ya posee la imagen
RUN /usr/local/bin/node-prune

# Directory Production
FROM node:alpine3.16

# Directorio de la imagen
WORKDIR /app

# Copiar archivos desde la primera imagen a la final que es esta actual
COPY --from=DEPLOYMENT /build/node_modules ./node_modules

COPY --from=DEPLOYMENT /build/package.json ./package.json

COPY --from=DEPLOYMENT /build/dist /dist

CMD ["yarn", "run", "prod"]

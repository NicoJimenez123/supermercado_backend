# supermercado_backend
Este es el backend para nuestra página web

# Levantar la aplicación utilizando docker-compose
Hay que tener buildeadas las imagenes tanto del backend como del frontend.<br>
La imagen del frontend debe llamarse super_front y la del backend super_back.<br>
En caso de no querer utilizar esos nombres hay que modificar el valor de la llave "image" de los servicios.
```
docker-compose up
```

# Para crear el contenedor ejecutar el siguiente comando dentro del directorio raíz:
```
docker build -t supermercado_backend -f Dockerfile .
```
# Para ejecutar el contenedor y permitir acceder al servidor desde fuera del container ejecutar:
```
docker run -d -p 3000:3000 supermercado_backend
```
# Para acceder al contenedor ejecutar:
```
docker exec -it {container_id} /bin/bash
```
# Para obtener el container_id ejecutar:
```
docker ps
```
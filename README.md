# supermercado_backend
Este es el backend para nuestra página web

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
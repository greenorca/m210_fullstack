# M210 Fullstack

* Multiuser app from M223 with added containerization
* Frontend based on React/Vite
* Backend based on Java SpringBoot

## Usage

### Backend (for DEVs)

1. **DataController** supports GET and (volatile) POST on "/api/items"
2. **AuthController** supports persistent POSTs for
    - "/api/auth/signup"
    - "/api/auth/login"

### Locally

1. setup MySQL-instance with database, grants and user credentials as in backend/src/main/resources/application.properties

   ```docker container run -d --name m450-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=demo -e MYSQL_USER=demo -e MYSQL_PASSWORD=demo -e MYSQL_DATABASE=demo mysql:8.0```

   
3. run in backend folder: `mvn spring-boot:run`
4. run in frontend folder: `npm install && npm run dev`
5. open <https://m210.localhost:8443>

    ![UI without login, displays a public read-only list](img/ui_without_login.png)

    *UI without login, displays a public  read-only list*

6. with default login (user, user)

    ![UI with login, second list is private may be extented](img/ui_with_login.png)

    *second list is private may be extented*

The Web-UI does not yet feature form to add or update list entries.

### With containers

* `docker compose up --build` runs the entire stack from scratch
* on first docker compose up, repeat (mysql container is not ready quick enough)
* make sure to properly kill the stack after code changes (docker compose down)


## Deploy in Kubernetes

1. K8S installation `sudo snap install microk8s --classic`
2. enable plugins: 
    - `microk8s enable hostpath-storage`
    - `microk8s enable ingress`
3. load configs: `for file in *.yaml; do microk8s.kubectl apply -f $file; done`
4. be patient until `microk8s.kubectl get all` shows all deployments are up and running
5. open <http://m210.localhost>

## Caddy

* provides central https-secured entrypoint for entire app
* see caddyfile

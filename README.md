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
2. run in backend folder: mvn spring-boot:run
3. run in frontend folder: npm install && npm run dev
4. open https://m210.localhost:8443

    ![UI without login, displays a public read-only list](img/ui_without_login.png)

    *UI without login, displays a public  read-only list*

5. with default login (user, user)

    ![UI with login, second list is private may be extented](img/ui_with_login.png)

    *second list is private may be extented*

The Web-UI does not yet feature form to add or update list entries.

### With containers

* `docker compose up --build` runs the entire stack from scratch
* on first docker compose up, repeat (mysql container is not ready quick enough)
* make sure to properly kill the stack after code changes (docker compose down)

## Caddy

* provides central https-secured entrypoint for entire app
* see caddyfile

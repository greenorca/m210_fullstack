# M210 Fullstack

* Multiuser app from M223 with added containerization
* Frontend based on React/Vite
* Backend based on Java SpringBoot

## Usage

### Locally

1. setup MySQL-instance with database, grants and user credentials as in backend/src/main/resources/application.properties
2. run in backend folder: mvn spring-boot:run
3. run in frontend folder: npm install && npm run dev

### With containers

* `docker compose up --build` runs the entire stack from scratch
* make sure to properly kill the stack after code changes (docker compose down)

## Caddy

* provides central https-secured entrypoint for entire app
* see caddyfile

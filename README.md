# M210 Fullstack

* Multiuser app from M223 with added containerization
* Frontend based on React/Vite
* Backend based on Java SpringBoot

## Usage

* `docker compose up --build` runs the entire stack from scratch
* make sure to properly kill the stack after code changes (docker compose down)

## Caddy

* provides central https-secured entrypoint for entire app
* see caddyfile
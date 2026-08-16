# hello-world

A tiny greeting web app built with Node.js and Express, used to demonstrate a working development environment.

## Requirements

- Node.js >= 20

## Getting started

```bash
npm ci        # install dependencies
npm run dev   # start the dev server (auto-reload) on http://localhost:3000
npm start     # start the server without watch mode
npm test      # run the test suite
```

Open http://localhost:3000, enter a name, and click **Say hello** to get a greeting.

## API

- `GET /api/health` → `{ "status": "ok", "uptime": <seconds> }`
- `POST /api/greet` with JSON body `{ "name": "Ada" }` → `{ "message": "Hello, Ada!", "at": "<iso-timestamp>" }`

## Project layout

```
src/app.js      Express app (routes + static file serving)
src/server.js   Server entry point
public/         Static front-end (HTML/CSS/JS)
test/           Automated tests (node:test + supertest)
```

## Cloud Agent environment

`.cursor/environment.json` configures the Cursor Cloud Agent environment:

- `install`: `npm ci`
- `terminals`: runs `npm run dev` so the dev server is available with visible logs.

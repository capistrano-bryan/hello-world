import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import { createApp } from "../src/app.js";

const app = createApp();

test("GET /api/health returns ok", async () => {
  const res = await request(app).get("/api/health");
  assert.equal(res.status, 200);
  assert.equal(res.body.status, "ok");
});

test("POST /api/greet greets by name", async () => {
  const res = await request(app)
    .post("/api/greet")
    .send({ name: "Ada" });
  assert.equal(res.status, 200);
  assert.equal(res.body.message, "Hello, Ada!");
});

test("POST /api/greet defaults to world when name is empty", async () => {
  const res = await request(app).post("/api/greet").send({});
  assert.equal(res.status, 200);
  assert.equal(res.body.message, "Hello, world!");
});

test("GET / serves the UI", async () => {
  const res = await request(app).get("/");
  assert.equal(res.status, 200);
  assert.match(res.text, /hello-world/);
});

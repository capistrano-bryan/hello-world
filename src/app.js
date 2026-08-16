import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
  });

  app.post("/api/greet", (req, res) => {
    const rawName = typeof req.body?.name === "string" ? req.body.name.trim() : "";
    const name = rawName.slice(0, 80) || "world";
    res.json({ message: `Hello, ${name}!`, at: new Date().toISOString() });
  });

  app.use(express.static(join(__dirname, "..", "public")));

  return app;
}

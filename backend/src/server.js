import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 4000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535.");
}

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "dhaka-tesla-pool-api",
  });
});

app.use((_req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});

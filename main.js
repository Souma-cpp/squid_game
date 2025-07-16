import express from "express";
const app = express();
const port = 3000;
import players from "./chars.js";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/players", (req, res) => {
  res.render("players", { players: players });
});

app.get("/player/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const player = players.find((p) => p.id === id);
  if (!player) return res.status(404).send("Player not found");
  res.render("details", { player });
});

// Catch-all for undefined routes (404)
app.use((req, res) => {
  res.status(404).render("404");
});

// General server error handler (500)
app.use((err, req, res, next) => {
  console.error("🚨 Internal Server Error:", err.stack);
  res.status(500).render("500");
});

app.listen(port, () => {
  console.log("server started");
});

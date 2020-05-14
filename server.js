const express = require("express");
const db = require("./dataListingsAndAgents.json");
const app = express();
const port = 4000;

app.get("/agents", (req, res) => res.send(db.agents));
app.get("/listings", (req, res) => res.send(db.listings));

app.get("/agents/:language", (req, res) => {
  const language = req.params.language;

  const filteredAgents = db.agents.filter((agent) => {
    return agent.languages.includes(language);
  });

  res.send(filteredAgents);
});

app.get("/db", (req, res) => {
  res.send(db);
});

app.listen(port, () => {
  console.log(`Listening on: ${port}`);
});

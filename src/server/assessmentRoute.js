const express = require("express");
const route = express.Router();
const fs = require("fs");
const assessmentRiskCalculator = require("./assessmentRiskCalculator");
const { v4: uuidv4 } = require("uuid");

route.get("/assessment", (req, res) => {
  const assessment = fs.readFileSync("./src/server/assessment.json", {
    encoding: "utf8",
  });
  res.send(assessment);
});

function assessmentToText(questions) {
  const lines = [];

  lines.push("Breask cancer assessment results");

  for (const question of questions) {
    lines.push("");
    lines.push("");
    lines.push("Question:");
    lines.push(question.question);
    lines.push("");
    lines.push("Answer:");
    lines.push(question.answer);
  }

  return lines.join("\n");
}

route.post("/assessment", async (req, res) => {
  const risk = await assessmentRiskCalculator(assessmentRiskCalculator);
  let resultsText = assessmentToText(req.body);

  resultsText += "\n\n ";

  const resultsUUID = uuidv4();

  fs.writeFileSync(`./src/server/results/${resultsUUID}`, resultsText, {
    encoding: "utf-8",
  });

  res.send({
    uuid: resultsUUID,
    risk: risk,
  });
});

route.get("/assessment/:uuid", (req, res) => {
  const resultsFilePath = `./src/server/results/${req.params.uuid}`;

  if (fs.existsSync(resultsFilePath)) {
    res.download(resultsFilePath);
  } else {
    res.status(404);
    res.send(`Result ${req.params.uuid} not found!`);
  }
});

module.exports = route;

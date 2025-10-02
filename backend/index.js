import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let donationCenters = [
  { id: 1, name: "City Hospital", address: "123 Main St" },
  { id: 2, name: "Red Cross Center", address: "456 Elm St" },
];

// GET
app.get("/centers", (req, res) => {
  res.json(donationCenters);
});

// POST
app.post("/centers", (req, res) => {
  const newCenter = { id: Date.now(), ...req.body };
  donationCenters.push(newCenter);
  res.status(201).json(newCenter);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});

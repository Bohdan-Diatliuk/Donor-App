import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Для Donate
let donationCenters = [
  { id: 1, name: "City Hospital", address: "123 Main St" },
  { id: 2, name: "Red Cross Center", address: "456 Elm St" },
];

// Для Explore
let exploreItems = [
  { id: 1, title: "City Hospital", description: "Donate blood safely" },
  { id: 2, title: "Red Cross Center", description: "Open daily" },
  { id: 3, title: "Community Health Center", description: "Open Mon-Fri 9am-5pm" },
];

// GET /centers — повертає список пунктів
app.get("/centers", (req, res) => {
  res.json(donationCenters);
});

// POST /centers — додає новий пункт (для тесту)
app.post("/centers", (req, res) => {
  const newCenter = { id: Date.now(), ...req.body };
  donationCenters.push(newCenter);
  res.status(201).json(newCenter);
});

app.get("/explore", (req, res) => {
    res.json(exploreItems);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

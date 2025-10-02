import express from "express";

const router = express.Router();

// Тимчасові дані (можна винести у JSON чи БД)
let donationCenters = [
  { id: 1, name: "City Hospital", address: "123 Main St" },
  { id: 2, name: "Red Cross Center", address: "456 Elm St" },
];

// GET /centers
router.get("/", (req, res) => {
  res.json(donationCenters);
});

// POST /centers
router.post("/", (req, res) => {
  const newCenter = { id: Date.now(), ...req.body };
  donationCenters.push(newCenter);
  res.status(201).json(newCenter);
});

export default router;

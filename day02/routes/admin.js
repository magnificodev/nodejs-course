const express = require("express");
const path = require("path")
const router = express.Router();

const rootDir = require("../utils/path")

// GET -> /admin/add-product
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// POST -> /admin/product
router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

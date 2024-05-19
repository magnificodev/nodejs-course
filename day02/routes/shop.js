const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../utils/path");
const adminData = require("./admin");

// GET -> /
router.get("/", (req, res) => {
    const products = adminData.products;
    res.render("shop", { prods: products, pageTitle: "SHOP PAGE", path: "/" });
});

module.exports = router;

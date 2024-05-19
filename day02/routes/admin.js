const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../utils/path");

const products = [];

// GET -> /admin/add-product
router.get("/add-product", (req, res) => {
    res.render("add-product", { pageTitle: "ADD PRODUCT PAGE", path: "/admin/add-product" });
});

// POST -> /admin/product
router.post("/product", (req, res) => {
    products.push({ title: req.body.title });
    res.redirect("/");
});

exports.routes = router;
exports.products = products;

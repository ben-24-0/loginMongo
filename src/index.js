// Load environment variables
require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongoDB");

const templatePath = path.join(__dirname, "../templates");
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));
// Serve static assets from the public directory
// Serve static files from public at root
app.use(express.static(path.join(__dirname, "../public")));
// Also serve static files under /public path for legacy references
app.use("/public", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  try {
    const data = { name: req.body.name, password: req.body.password };
    await collection.insertMany([data]);
    res.render("home");
  } catch (err) {
    console.error(err);
    res.render("signup", { errorMessage: "Registration failed. Please try again." });
  }
});

app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.name });
    if (check && check.password === req.body.password) {
      res.render("home");
    } else {
      res.render("login", { errorMessage: "Invalid username or password" });
    }
  } catch (err) {
    console.error(err);
    res.render("login", { errorMessage: "An error occurred. Please try again." });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const database = require("./src/database");
const productRoute = require("./src/products/routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

database
  .sync({ force: false })
  .then(() => {
    console.info("database synced");
  })
  .catch((err) => {
    console.error("failed to sync database: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({
    message: "REST API Server",
  });
});

app.use("/api/products", productRoute);

app.listen(port, () => console.log(`Server up and running on port ${port}`));

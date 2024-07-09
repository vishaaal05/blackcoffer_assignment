const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index")

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/v1", mainRouter);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
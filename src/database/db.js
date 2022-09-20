const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://sahil:sahil@mycluster.2ud6h.mongodb.net/sahil`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("connection error", error);
  });

const mongoose = require("mongoose");
const connection = "mongodb://localhost:27017/ServiceNinja";

mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to database");
});

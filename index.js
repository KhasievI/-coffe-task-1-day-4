const mongoose = require("mongoose");
const express = require("express");

const app = express();
port = 3034;
app.use(express.json());


mongoose
  .connect("mongodb+srv://khasiev:malsy1999@cluster0.yzc6knt.mongodb.net/drink")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.use(require('./routes/drink.route'))

app.listen(port, () => {
    console.log("conected");
  });
  
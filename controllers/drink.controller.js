const Drink = require("../models/Drink.model");

module.exports.drinksController = {
  getDrinks: (req, res) => {
    Drink.find({}, ["name", "price"]).then((drinks) => {
      res.json(drinks);
    }).catch('{ "error": "Ошибка при выводе списка напиток" }');
  },
  stockDrinks: (req, res) => {
    Drink.find({ stock: true }).then((data) => {
      res.json(data);
    }).catch('{ "error": "Ошибка при выводе списка" }');
  },
  getDrink: (req, res) => {
    Drink.findById(req.params.id).then((dr) => {
      res.json(dr);
    }).catch({ "error": "Ошибка при выводе списка" });
  },
  postDrink: (req, res) => {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      cofein: req.body.stock,
      volume: req.body.volume,
      description: req.body.description,
    }).then((dri) => {
      res.json(dri);
    }).catch({ "error": "Ошибка при добавлении нового напитка" });
  },
  deleteDrink: (req, res) => {
    Drink.findByIdAndDelete(req.params.id).then((d) => {
      res.json(d);
    }).catch('{ "error": "Ошибка при удалении напитка" }');
  },
  patchDrink: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      cofein: req.body.stock,
      volume: req.body.volume,
    }).then((updrink) => {
      res.json(updrink);
    }).catch({ "error": "Ошибка при изменении информации о напитке" });
  },
};

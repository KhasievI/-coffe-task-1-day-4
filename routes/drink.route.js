const { Router } = require("express");
const { drinksController } = require("../controllers/drink.controller");

const router = Router()

router.get('/drinks', drinksController.getDrinks)
router.get('/drinks/in-stock', drinksController.stockDrinks)
router.get('/drinks/:id', drinksController.getDrink)
router.post('/drinks', drinksController.postDrink)
router.delete('/drinks/:id', drinksController.deleteDrink)
router.patch('/drinks/:id', drinksController.patchDrink)

module.exports = router;


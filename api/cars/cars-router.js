// DO YOUR MAGIC
const express = require('express')
const router = express.Router();
const Car = require('./cars-model')
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    Car.getAll()
    .then(car => {
     res.json(car)   
    })
    .catch(next)
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
        const car = await Car.getById(req.params.id);
        res.status(200).json(car)
    }
    catch (err) {
        next(err)
    }
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(201).json(newCar)
    }
    catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    // DO YOUR MAGIC
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
    })
  })


module.exports = router;
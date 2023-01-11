// DO YOUR MAGIC
const express = require('express')
const router = express.Router();
const Car = require('./cars-model')
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require('./cars-middleware')

router.get('/', (res, req, next) => {
    Car.getAll()
    .then(car => {
     res.status(200).json(car)   
    })
    .catch(next)
})

router.get('/:id', (res, req, next) => {
    
})

router.post('/', (res, req, next) => {
    
})

router.use((err, req, res, next) => { // eslint-disable-line
    // DO YOUR MAGIC
    res.status(err.status || 500).json({
      message: err.message
    })
  })


module.exports = router;
const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const valid = await Car.getById(req.params.id)
  if(!valid) {
    next(res.status(404).json({ "message": "car with id" + req.params.id + "is not found"}))
  } else {
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  // shrink to single line of code using filter
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    next(res.status(400).json({ "message": vin + "is not found" }))
  } else if (!make) {
    next(res.status(400).json({ "message": make + "is not found" }))
  } else if (!model) {
    next(res.status(400).json({ "message":model + "is not found" }))
  } else if (!mileage) {
    next(res.status(400).json({ "message": mileage + "is not found" }))
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
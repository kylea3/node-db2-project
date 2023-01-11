const Car = require('./cars-model')
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const valid = await Car.getById(req.params.id)
  if(!valid) {
    next(res.status(404).json({ "message": "car with id " + req.params.id + " is not found"}))
  } else {

    next()
  }
}

const checkCarPayload = (req, res, next) => {
  // shrink to single line of code using filter
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    next(res.status(400).json({ "message": "vin is missing" }))
  } else if (!make) {
    next(res.status(400).json({ "message": "make is missing" }))
  } else if (!model) {
    next(res.status(400).json({ "message": "model is missing" }))
  } else if (!mileage) {
    next(res.status(400).json({ "message": "mileage is missing" }))
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  if(vinValidator.validate(vin)) {
    next()
  } else {
    next(res.status(400).json({ "message": "vin " + vin + " is invalid"}))
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  const valid = await Car.checkUniqueVin(vin);
  if(valid) {
    next(res.status(400).json({ "message": "vin " + vin + " already exists"}))
  } else {
    next()
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
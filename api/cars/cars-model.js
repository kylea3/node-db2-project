const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('cars')
  .where('id', id)
  .first()
}

const checkUniqueVin = vin => {
  return db('cars')
  .where('vin', vin)
  .first()
}

const create = async car => {
  // DO YOUR MAGIC
  await db('cars')
  .insert(car)
  return db('cars')
  .orderBy('id', 'desc')
  .first()
}

module.exports = {
  getAll,
  checkUniqueVin,
  getById,
  create
}
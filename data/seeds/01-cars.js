// STRETCH
const cars = [
    {
        vin: '12345678910111213',
        make: 'Chevy',
        model: 'Traverse',
        mileage: 20,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '12345678999101112',
        make: 'GMC',
        model: 'Acadia',
        mileage: 200000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '12211567891011121',
        make: 'Lincoln',
        model: 'Navigator',
        mileage: 4003,
        title: 'salvage',
        transmission: 'automatic'
    }
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
}
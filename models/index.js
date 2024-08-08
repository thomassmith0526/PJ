const Airport = require('./airport');
const Pilot = require('./pilot');
const Plane = require('./plane');
const Rental = require('./rental');
const User = require('./user');


User.hasMany(Plane, {
    foreignKey: 'user_id',
});

User.hasMany(Rental, {
    foreignKey: 'user_id',
});

Plane.hasMany(Airport, {
    foreignKey: 'plane_id',
});

Plane.hasOne(Pilot, {
    foreignKey: 'plane_id',
});

Plane.hasMany(Rental, {
    foreignKey: 'plane_id',
});

Plane.hasMany(User, {
    foreignKey: 'plane_id',
});

Pilot.hasMany(Plane, {
    foreignKey: 'pilot_id',
});

Rental.hasOne(User, {
    foreignKey: 'rental_id',
});

module.exports = { User, Airport, Pilot, Plane, Rental };
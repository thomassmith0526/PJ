const { Pilot } = require('../models');

const pilotdata = [
    {
        first_name: 'Tim',
        last_name: 'Jones',
        year_of_experience: 10,
    },
    {
        first_name: 'James',
        last_name: 'Scott',
        year_of_experience: 11,
    },
    {
        first_name: 'Johnny',
        last_name: 'Longbow',
        year_of_experience: 9,
    },
    {
        first_name: 'Austin',
        last_name: 'Smith',
        year_of_experience: 6,
    },
    {
        first_name: 'Dave',
        last_name: 'Baer',
        year_of_experience: 12,
    },
    {
        first_name: 'Jorge',
        last_name: 'Hernandez',
        year_of_experience: 20,
    },
    {
        first_name: 'Grey',
        last_name: 'Scott',
        year_of_experience: 13,
    },
    {
        first_name: 'Jake',
        last_name: 'Homes',
        year_of_experience: 2,
    },
    {
        first_name: 'Jessica',
        last_name: 'Jones',
        year_of_experience: 11,
    },
    {
        first_name: 'Hannah',
        last_name: 'Cox',
        year_of_experience: 10,
    },
    {
        first_name: 'Jung',
        last_name: 'Tran',
        year_of_experience: 16,
    },
];

const seedPilot = () => Pilot.bulkCreate(pilotdata);

module.exports = seedPilot;
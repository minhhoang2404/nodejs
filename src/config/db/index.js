const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost/DataTest');
        console.log("done !!!!!!!!!!!");
    } catch (error) {
        console.log("failed !!!!!!!!!!!");
    }

}

module.exports = connect
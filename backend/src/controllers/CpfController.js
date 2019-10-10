const Cpf = require('../models/Cpf');

module.exports = {
    get (req, res) {
        
        // Instantiate User:
        let cpf = new Cpf();

        return res.json( {cpf} );
    }
};
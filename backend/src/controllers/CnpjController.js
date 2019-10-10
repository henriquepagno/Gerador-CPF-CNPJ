const Cnpj = require('../models/Cnpj');

module.exports = {
    get (req, res) {
        
        // Instantiate User:
        let cnpj = new Cnpj();

        return res.json( {cnpj} );
    }
};
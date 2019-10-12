const Cnpj = require('../models/Cnpj');
const CnpjValidator = require('../models/CnpjValidator');

module.exports = {
    get (req, res) {
        
        // Instantiate User:
        let cnpj = new Cnpj();

        return res.json( {cnpj} );
    },

    post (req, res) {
        // Instantiate User:
        let cnpjValidator = new CnpjValidator( {cnpj: req.body.cnpj});

        return res.json( {cnpjValidator} );
        
    }
};
const Cpf = require('../models/Cpf');
const CpfValidator = require('../models/CpfValidator');

module.exports = {
    get (req, res) {
        
        let cpf = new Cpf();

        return res.json( {cpf} );
    },

    post (req, res) {
        
        let cpfValidator = new CpfValidator( {cpf: req.body.cpf});

        return res.json( {cpfValidator} );
    }
};
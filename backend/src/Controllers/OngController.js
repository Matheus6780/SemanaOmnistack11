const crypto = require('crypto')
const connection = require('../database/connection')


module.exports = {

    async list(req, res) {

        try {
            const ongs = await connection('ongs').select('*')
            return res.json(ongs)
    
        } catch (error) {
            console.log(error)
            res.json({ msg: 'Failed to obtain the list of ongs.'})
        }
        
    },

    async create(req, res) {

        const { name, email, whatsapp, city, uf }= req.body
        const id = crypto.randomBytes(4).toString('HEX')
    
        try {
            
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            })
            res.json({ yourId: id })
    
        } catch (error) {
            console.log(error)
            res.json({ msg: 'An error occurred.'})
        }
        
    }
}
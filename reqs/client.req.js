const database = require('../services/database')

class ClientReq {
    async createClient(req, res){
        const {first_name, surname} = req.body
        const newClient = await database.query('INSERT INTO client (first_name, surname) values ($1, $2) RETURNING *', [first_name, surname])
        res.json('newClient')
    }
    async getClients(req, res){

    }
    async getClientID(req, res){

    }
    async updateClient(req, res){

    }
    async deleteClient(req, res){

    }
}

module.exports = new ClientReq()
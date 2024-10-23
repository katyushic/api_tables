const database = require('../services/database')

class ClientReq {
    async createClient(req, res){
        const {first_name, surname} = req.body
        const newClient = await database.query(
            'INSERT INTO client (first_name, surname) values ($1, $2) RETURNING *',
            [first_name, surname]
        )
        res.json(newClient.rows[0])
    }
    async getClients(req, res){
        const {} = req.body
        const getClients = await database.query('SELECT * FROM client')
        res.json(getClients.rows)
    }
    async getClientId(req, res){
        const id = req.params.id
        const getClients = await database.query('SELECT * FROM client where id = $1',
            [id]
        )
        res.json(getClients.rows[0])
    }
    async updateClient(req, res){
        const {id, first_name, surname} = req.body
        const user = await database.query(
            'UPDATE client set first_name = $1, surname = $2 where id = $3 RETURNING *',
            [first_name, surname, id]
        )
        res.json(user.rows[0])
    }
    async deleteClient(req, res){
        const id = req.params.id
        const getClients = await database.query(
            'DELETE FROM client where id = $1',
            [id]
        )
        res.json(getClients.rows[0])
    }
}

module.exports = new ClientReq()
const database = require('../services/database')

class TicketReq {
    async createTicket(req, res) {
        const {title, content, clientId} = req.body
        const newTicket = await database.query(
            'INSERT INTO ticket (title, content, client_Id) values ($1, $2, $3) RETURNING *',
            [title, content, clientId]
        )
        res.json(newTicket.rows[0])
    }

    async getTicketsByClient(req, res) {
        const id = req.query.id
        const getTicket = await database.query(
            'SELECT * FROM ticket where client_id = $1',
            [id]
        )
        res.json(getTicket.rows[0])
    }
}


module.exports = new TicketReq()
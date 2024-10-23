const Router = require('express')
const router = new Router()
const ticketReq = require('../reqs/ticket.req')

router.post('/ticket', ticketReq.createTicket)
router.get('/ticket', ticketReq.getTicketsByClient)


module.exports = router
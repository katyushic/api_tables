const Router = require('express')
const router = new Router()
const clientReq = require('../reqs/client.req')

router.post('/client', clientReq.createClient)
router.get('/client', clientReq.getClients)
router.get('/client/:id', clientReq.getClientID)
router.put('/client', clientReq.updateClient)
router.delete('/client/:id', clientReq.deleteClient)


module.exports = router
const express = require('express');
const OngController = require('./controllers/OngsController')
const CasoController = require('./controllers/CasoController')
const ProfileCasoController = require('./controllers/ProfileCasoController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/casos', CasoController.indexCaso)
routes.post('/casos', CasoController.createCaso)
routes.delete('/casos/:id', CasoController.deleteCaso)

routes.get('/profile',ProfileCasoController.indexEspecifico)
routes.post('/sessions', SessionController.login)

module.exports = routes;
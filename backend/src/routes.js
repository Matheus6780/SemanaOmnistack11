const router = require('express').Router()
const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')

/* 
    query params => www.site.com/?myparam=itsvalue&anotherparam=itsvalue
*/

router.route('/ongs').get(OngController.list)
router.route('/ongs').post(OngController.create)

router.route('/incidents').get(IncidentController.index)
router.route('/incidents').post(IncidentController.create)
router.route('/incidents/:id').delete(IncidentController.delete)

router.route('/profile').get(ProfileController.index)

router.route('/sessions').post(SessionController.create)



module.exports = router
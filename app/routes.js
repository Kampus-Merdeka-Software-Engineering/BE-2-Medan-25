// KUMPULAN ROUTER

const express = require('express');
const router = express.Router();

// DATABASE------------------------

const sequelize = require("sequelize")



// ROUTES -------------------------
// testing
const controlTest = require('./controller/test')
router.get('/test', controlTest.test);

const controlArtikel = require('./controller/artikel')
router.get('/artikel', controlArtikel.getAllartikel)

const controlFeedback = require('./controller/feedback')
router.post('/feedback', controlFeedback.feedback)

// // Landing page (Main Menu)
// const controlLanding = require('./controller/landing_page')
// router.get('/', controlLanding.landingPage);

// // coba database dummy (PROBLEM)
// const controlDummy = require('./controller/dummy')
// router.get('/dummy', controlDummy.dumi);

// // Register page
// const controlRegister = require('./controller/register')
// router.post('/register', controlRegister.register)


// // Login page
// const controlLogin = require('./controller/login')
// router.post('/login', controlLogin.login)



// export file
module.exports = router;


// NOTES :
// untuk nyambungin ke middleware
// const middleware = require('./middleware/contoh_middleware')

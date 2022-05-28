const { Router } = require('express')
const router = Router();

const juegos = require('./data.json');

router.post('/', (req,res) => {
    const {usuario, partida, puntaje} = req.body;


})

router.get('/prueba', (req,res) => {
    const data = {
       "usuario":"",
       "partida":"Gun Game",
       "posiciones":"10",
    }
    
    res.json(data);
})

module.exports = router;
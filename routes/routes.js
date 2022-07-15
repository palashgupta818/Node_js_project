const express       = require('express');
//const app           = express();
const router        = express.Router();
const Controller    = require('../controller'); // controller 
const middlware     = require('../middleware/auth_middlware');

router.post('/registerUser',Controller.registerUser);
router.get('/allUser',Controller.allUser);
router.post('/logout',Controller.logout);
router.post('/login',Controller.login);
router.post('/createTodo',middlware,Controller.createTodo);
router.get('/getAllTodos',middlware,Controller.getAllTodos);
router.delete('/deleteTodo/:id',middlware,Controller.deleteTodo);
router.put('/updateTodo/:id',middlware,Controller.updateTodo);

module.exports = router;
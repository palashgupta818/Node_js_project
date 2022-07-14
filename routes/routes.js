const express       = require('express');
const app           = express();
const Controller    = require('../controller'); // controller 
const middlware     = require('../middleware/auth_middlware');
app.post('/registerUser',Controller.registerUser);
app.get('/allUser',Controller.allUser);
app.post('/logout',Controller.logout);
app.post('/login',Controller.login);
app.post('/createTodo',middlware,Controller.createTodo);
app.get('/getAllTodos',middlware,Controller.getAllTodos);
app.delete('/deleteTodo/:id',middlware,Controller.deleteTodo);
app.put('/updateTodo/:id',middlware,Controller.updateTodo);
app.listen(3000, () => console.log(`App is running`)); 
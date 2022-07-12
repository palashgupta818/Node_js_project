const express     = require('express');
const mongoose    = require('mongoose');
var Schema        = mongoose.Schema;
const app         = express();
var cookieParser  = require('cookie-parser');
const session     = require('express-session');
app.use(cookieParser());
app.use(express.json());
app.use(session({secret: 'ssshhhhh'}));
app.use(express.urlencoded({ extended: true }));
const ConnectDB = require('./config/db');
ConnectDB();
const User = require('./model/P_user'); // User Model
const Todo = require('./model/P_todo'); // Todo Model
const Controller = require('./controller'); // COntroller 

app.post('/registerUser',Controller.registerUser);
app.get('/allUser',Controller.allUser);
app.post('/logout',Controller.logout);
app.post('/login',Controller.login);
app.post('/createTodo',Controller.createTodo);
app.get('/getAllTodos',Controller.getAllTodos);
app.delete('/deleteTodo/:id',Controller.deleteTodo);
app.put('/updateTodo/:id',Controller.updateTodo);
app.listen(3000, () => console.log(`App is running`));


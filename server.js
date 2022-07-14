const express       = require('express');
const app           = express();
var cookieParser    = require('cookie-parser');
const session       = require('express-session');
const ConnectDB     = require('./config/db');
ConnectDB();
app.use(cookieParser());
app.use(express.json());
app.use(session({secret: 'ssshhhhh'}));
app.use(express.urlencoded({ extended: true }));
//require('./routes/routes'); 

const Controller    = require('./controller'); // controller 
const middlware     = require('./middleware/auth_middlware');
app.post('/registerUser',Controller.registerUser);
app.get('/allUser',Controller.allUser);
app.post('/logout',Controller.logout);
app.post('/login',Controller.login);
app.post('/createTodo',middlware,Controller.createTodo);
app.get('/getAllTodos',middlware,Controller.getAllTodos);
app.delete('/deleteTodo/:id',middlware,Controller.deleteTodo);
app.put('/updateTodo/:id',middlware,Controller.updateTodo);
app.listen(3000, () => console.log(`App is running`)); 




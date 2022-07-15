const express       = require('express');
const app           = express();
var cookieParser    = require('cookie-parser');
const session       = require('express-session');
const ConnectDB     = require('./config/db');
require('dotenv').config({ path : './config/config.env'});
ConnectDB();
app.use(cookieParser());
app.use(express.json());
app.use(session({secret: 'ssshhhhh'}));
app.use(express.urlencoded({ extended: true }));
app.use('/',require('./routes/routes'));
  
//app.listen(process.argv[2], () => console.log(`App is running on port ${process.argv[2]}`));
app.listen(process.env.PORT, () => console.log(`App is running`));  




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

// This is only use for run time argument
const argv = process.argv.slice(2).toString().split("=");
var PORT = "";
if(argv[1]){
    PORT = argv[1];
}else{
    PORT = process.env.PORT;
}

app.listen(PORT, () => console.log(`App is running on ${PORT}`));  




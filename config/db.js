const mongoose = require('mongoose'); 
const connectDB = async () => {
    const con = await mongoose.connect(`mongodb+srv://admin:admin123@cluster0.ox6rx.mongodb.net/users?retryWrites=true`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB connected:${con.connection.host}');
}
module.exports = connectDB;
const User = require('./model/P_user'); // User Model
const Todo = require('./model/P_todo'); // Todo Model

exports.registerUser = (req,res) => {
  try {
    User.find({email:req.body.email}, (err, users)=> {
      if(err) throw err;
      if(users.length){ 
        res.send({ message: 'User is already exist please use other email id'});     
      }else{
        User.create(req.body);
        res.send({ message:'Data Inserted Successfully' });
      }
    });
  } catch (error) {
    res.status(400).send({ message:'Issue is coming while register user' });   
  }
}

exports.allUser = (req,res)=> {
    try {
     const data = User.find({}, (err, users)=> {
       res.status(200).send({users});
     });
    } catch (error) {
       res.status(400).send({ message:'Issue is coming while fetch User' });
    }
}

exports.createTodo = (req,res)=>{
    try {
      if(req.session.username){  // check the session is not destroy
        var json = {
          'title'       : req.body.title,
          'description' : req.body.description,
          'username'      : req.session.username 
        };
        Todo.create(json); 
        res.status(200).send({ message:"todo created successfully"})
      }else{
        res.status(400).send({ message:'User is not authorised' });
      } 
    } catch (error) {
      res.status(400).send({ message:'Issue is coming while creating Todo' });
    }
  }

  exports.getAllTodos = (req,res) => {
    try {
      if(req.session.username){ // check the session is not destroy
        Todo.find({username:req.session.username},(err,todos)=>{
          if(todos.length == 0){
            res.send({ message: 'No records found'});  
          }else{ 
            res.send(todos);
          }
        })
      }else{
        res.status(400).send({ message:'User is not authorised' });  
      }
    } catch (error) {
      res.status(400).send({ message:'Issue is coming while fetch Todo' });
    }
}

exports.updateTodo = (req,res) => { 
    try {
      if(req.session.username){ // check the session is not destroy
        Todo.findByIdAndUpdate(req.params.id,req.body,(err,docs)=>{
          if(err) console.log(err);
          res.send("Updated User : "+ docs);  
        })
      }else{
        res.status(400).send({ message:'User is not authorised' });  
      }
    } catch (error) {
      res.status(400).send({ message:'Issue is coming while update Todo' });
    }
}

exports.deleteTodo = (req,res)=>{
    try {
      if(req.session.username){ // check the session is not destroy
        Todo.findByIdAndDelete(req.params.id,(err,docs)=>{
          if(err) console.log(err);
          res.send('Todo deleted succssfully');
        })
      }else{
        res.status(400).send({ message:'User is not authorised' });  
      }
    } catch (error) {
      res.status(400).send({ message:'Issue is coming while delete Todo' });
    } 
}

exports.login = (req,res) => {  
    try {
        generateSession(req,res);
        if (!req.cookies) {
          res.status(401).end()
          return
        } 
  
        const sessionToken = req.cookies['session_token']
        if (!sessionToken) {
            res.status(401).end()
            return
        }
        
        User.find({email:req.session.username,password:req.session.password},(err,data)=>{
          if(err) throw err;
          res.status(200).send({user:data});
        })
    } catch (error) {
      res.status(400).send({ message:'Issue is coming while login User' });
    }
  }


const generateSession = (req,res) => {
    req.session.username  = req.body.username;
    req.session.password  = req.body.password;
    const now             = new Date()
    const expiresAt       = new Date(+now + 120 * 1000)
    res.cookie("session_token", req.session, { expires: expiresAt });
}

exports.logout = (req,res) => {
    if(req.session.username == req.body.username){
      req.session.destroy((err) => {
        if(err) console.log(err);
      }); 
        res.status(200).send({message:'Logout successfully'});
    }else{
        res.status(401).send({message:'User doen not exist'});
    } 
}


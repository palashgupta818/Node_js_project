module.exports = (req,res,next) =>{
    //console.log(typeof(req.session));
    if(typeof(req.session) !== 'undefined' && typeof(req.session.username) !== 'undefined'){ 
        next();
    }else{
        res.status(400).send({ message:'User is not authorised' }); 
    }
}
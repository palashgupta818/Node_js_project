module.exports = (req,res,next) =>{
    if(req.session.username){ 
        next();
    }else{
        res.status(400).send({ message:'User is not authorised' }); 
    }
}
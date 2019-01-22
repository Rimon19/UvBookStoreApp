function log(req,res,next){
    console.log('logginin..')
    next();
}
module.exports=log;

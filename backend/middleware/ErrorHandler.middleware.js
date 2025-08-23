function ErrorHanddler (error,req,res,next) {
     console.log("ye errorHandler pe aane se phle",error)
     const message = error.message || "Something wents wrong";
     const statusCode = error.statusCode ||500;
     const status = error.status || "error"
     
     console.log(error)
     res.status(statusCode).json({message : message,status:status});
}
module.exports = ErrorHanddler;
const logger = (req,res,next) => {
    console.log('Request Received: ',req.url);
    next();
  };

  module.exports = logger;
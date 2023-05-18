const {StatusCodes} = require('http-status-codes')

const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message='something went wrong while creating a airport';
        
        ErrorResponse.error=new AppError(['Name not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message='something went wrong while creating a airport';
        
        ErrorResponse.error=new AppError(['Airport code not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.cityId){
        ErrorResponse.message='something went wrong while creating a airport';
        
        ErrorResponse.error=new AppError(['Airport cityId not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}
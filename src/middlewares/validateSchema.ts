import { Request, Response, NextFunction } from "express";

type post = {
    owner:string,
    text:string
}

function validateSchema(schema:any){

    return (req:Request,res:Response,next: NextFunction) =>{
        const { error } = schema.validate(req.body,{abortEarly:false});

        if(error){

            const errorMessages = error.details.map((err) => err.message);

            return res.status(422).send(errorMessages);

        }
        next()
    }
}

export default validateSchema
declare namespace Error {
    type base = {
        message:String;
    }

    type BadRequestError = {
        reason: "bad request";
    } & base;

    type NotFoundError = {
        reason: "not found";
    } & base;
    
    type ErrorResponse = 
    | BadRequestError 
    | NotFoundError;
}
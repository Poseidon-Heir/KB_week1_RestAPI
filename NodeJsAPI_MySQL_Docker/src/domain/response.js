
class Response{
     constructor(statusCode,httpStatus,message,data){
        console.log('123');
        this.timeStamp = new Date().toLocaleString();
        this.statusCode = statusCode;
        this.httpStatus = httpStatus;
        this.message = message;
        this.data = data;
    }
}
 

// export default Response;
module.exports = {Response}

export class ResponseHelper {
    constructor() { }

    public success(message: any, input: any): IResponse {
        return <IResponse>{
            statusCode: 200,
            body: JSON.stringify({ message, input })
        };
    }

    public error(message: any, input: any): IResponse {
        return <IResponse>{
            statusCode: 500,
            body: JSON.stringify({ message, input })
        };
    }

    public custom(message: any, input: any, statusCode: number): IResponse {
        return <IResponse>{
            statusCode,
            body: JSON.stringify({ message, input })
        };
    }
}

export class ApiError extends Error {
    constructor(message:string) {
        super(message);
        this.name = "ApiError";
    }
}

export class UnauthorizedException extends Error {
    constructor(message:string) {
        super(message);
        this.name = "UnauthorizedException";
    }
}

export class FileTooLargeException extends Error {
    constructor(message:string) {
        super(message);
        this.name = "FileTooLargeException";
    }
}




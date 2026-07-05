class DomainException extends Error {
    constructor(message: string = "Exceção de domínio genérica") {
        super(message);
        this.name = "DomainException";
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }

}

class IDEntityUUIDInvalido extends DomainException {
    public constructor(message: string = "O ID da entidade não é um UUID válido") {
        super(message);
        this.name = "IDEntityUUIDInvalido";
        this.message = message;
    }
}

export { DomainException, IDEntityUUIDInvalido };   

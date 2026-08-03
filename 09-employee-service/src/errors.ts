
export class EmployeeNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EmployeeNotFoundError";
    }

}

export class DuplicateEmailError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DuplicateEmailError";
    }
}

export class InvalidEmployeeInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidEmployeeInputError";
    }
}
export class NotAnArrayError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotAnArrayError";
    }
}

export class NotASubsetError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotASubsetError";
    }
}

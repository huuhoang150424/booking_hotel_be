class InvalidInputError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;  
    Object.setPrototypeOf(this, InvalidInputError.prototype);
  }
}

export default InvalidInputError;

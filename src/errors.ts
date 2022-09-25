class InvalidPosition extends Error {
  __proto__ = Error;

  constructor(message?: string) {
    if (message === undefined) {
      message = 'Invalid position';
    }
    super(message);
    Object.setPrototypeOf(this, InvalidPosition.prototype);
  }
}

export {InvalidPosition};

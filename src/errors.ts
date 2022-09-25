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

class InvalidParameter extends Error {
  __proto__ = Error;

  constructor(message?: string) {
    if (message === undefined) {
      message = 'Invalid parameter';
    }
    super(message);
    Object.setPrototypeOf(this, InvalidParameter.prototype);
  }
}

export {InvalidPosition, InvalidParameter};

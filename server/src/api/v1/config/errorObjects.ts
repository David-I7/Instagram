type ServerErrorObject = {
  [key: string]: any;
};

export class ServerError extends Error {
  constructor(
    public message: string,
    public data: ServerErrorObject,
    public code: number
  ) {
    super(message);
  }
}

type AuthErrorObject = {
  [key: string]: any;
  details: string;
};

export class AuthError extends Error {
  constructor(
    public message: string,
    public data: AuthErrorObject,
    public status: number
  ) {
    super(message);
  }
}

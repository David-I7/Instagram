export interface UserRegister {
  displayUsername: string;
  fullName?: string;
  secondaryUsername: string;
  pwd: string;
  birthday: Date;
}

export interface UserAuth {
  username: UserRegister["displayUsername"] | UserRegister["secondaryUsername"];
  pwd: string;
}

export interface AuthKeys {
  username: string;
}

export interface RegisterKeys {
  secondaryUsername: string;
  displayUsername: string;
}

// types

export interface UserRegister {
  displayUsername: string;
  fullName?: string;
  secondaryUsername: string;
  pwd: string;
}

export interface UserAuth {
  username: UserRegister["displayUsername"] | UserRegister["secondaryUsername"];
  pwd: string;
}

export interface AuthResults {
  username: string;
  pwd: string;
}

export interface RegisterResults {
  displayUsername: string;
  fullName?: string;
  secondaryUsername: string;
  pwd: string;
}

// types

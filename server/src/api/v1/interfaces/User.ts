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
  username: boolean;
  pwd: boolean;
}

export interface RegisterResults {
  displayUsername: boolean;
  fullName?: boolean;
  secondaryUsername: boolean;
  pwd: boolean;
}

// types

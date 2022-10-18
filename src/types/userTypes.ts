export interface LoginFormInterface {
  email: string;
  password: string;
}

export interface RegisterFormInterface {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  couse_module: string;
}

export interface EditFormInterface {
  name: string;
  contact: string;
  old_password: string;
  password: string;
}

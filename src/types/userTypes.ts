import {
  TechsInterface,
  WorksInterface,
} from "./profileTypes";

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
  course_module: string;
}

export interface EditFormInterface {
  name: string;
  contact: string;
  old_password: string;
  password: string;
}

export interface ResponseLoginInterface {
  user: {
    avatar_url: string | null;
    bio: string;
    contact: string;
    course_module: string;
    created_at: string;
    email: string;
    id: string;
    name: string;
    updated_at: string;
    techs: TechsInterface[];
    works: WorksInterface[];
  };

  token?: string;
}

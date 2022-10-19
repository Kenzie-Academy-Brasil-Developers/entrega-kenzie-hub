import { SetStateAction } from "react";

export interface ProfileInterface {
  works: SetStateAction<ProfileInterface[]>;

  id: string;
  name: string;
  contact: string;
  email: string;
  couse_module: string;
  token: string;
}

export interface UserInterface {
  id: string;
  name: string;
  contact: string;
  email: string;
  course_module: string;
  bio: string;
  techs?: TechsInterface[];
  works?: WorksInterface[];
  created_at?: string;
  updated_at?: string;
  avatar_url?: null | string;
}

export interface TechsInterface {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface WorksInterface {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
  user: [id: string];
}

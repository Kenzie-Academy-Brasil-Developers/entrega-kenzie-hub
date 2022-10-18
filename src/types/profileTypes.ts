import { SetStateAction } from "react";

export interface ProfileInterface {
  works: SetStateAction<never[]>;
  user: [
    id: string,
    name: string,
    contact: string,
    email: string,
    couse_module: string,
    token: string,

    techs?: [
      id: string,
      title: string,
      status: string,
      created_at: string,
      updated_at: string
    ],

    works?: [
      id: string,
      title: string,
      description: string,
      deploy_url: string,
      created_at: string,
      updated_at: string,
      user: [id: string]
    ]
  ];
}

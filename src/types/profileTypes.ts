export interface ProfileInterface {
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
    ]
  ];
}

import { Moment } from "moment";

export class User {
  id?: number;
  first_name?: string;
  last_name?: string;
  gender?: string;
  email?: string;
  country?: string;

  user_category?: string;
  role_type?: string;
  login_type?: string;

  username?: string;
  password?: string;

  secret_question?: string;
  encoded_secret_answer?: string;
  encoded_custom_secret_question?: string;
  encoded_custom_secret_answer?: string;

  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?:boolean;

  date_joined?: Moment;
  last_login?: Moment;
  created_at?: Moment;
  updated_at?: Moment;
}

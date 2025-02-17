import { Methods } from "./methods";
export type Route = {
  path: string;
  method?: `${Methods}`;
};

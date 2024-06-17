import { File } from "sanity";

export type Report = {
  _type: "report";
  _key: string;
  name: string;
  description: string;
  file: File;
};

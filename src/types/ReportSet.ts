import { Report } from "@/types/Report";

export type ReportSet = {
  _type: "reportSet";
  _key: string;
  layout: 'grid' | 'list';
  reports: Report[];
};


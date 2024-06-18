import { ComponentProps } from "@/types/Component";
import { Report } from "@/types/Report";

export type ReportSetLayout = "grid" | "list";

export type ReportSet = ComponentProps & {
  _type: "reportSet";
  layout: ReportSetLayout;
  reports: Report[];
};

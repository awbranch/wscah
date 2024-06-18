import { ComponentProps } from "@/types/Component";
import { Team } from "@/types/Team";

export type TeamTabs = ComponentProps & {
  _type: "teamTabs";
  teams: Team[]; // The teams to display
};

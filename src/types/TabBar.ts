import { ComponentProps } from "@/types/Component";
import { TabBarItem } from "@/types/TabBarItem";

export type TabBar = ComponentProps & {
  _type: "tabBar";
  id: string;
  tabs: TabBarItem[];
};

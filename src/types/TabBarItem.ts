import { Component } from "@/types/Component";

export type TabBarItem = {
  _type: "tabBarItem";
  _key: string;
  id: string;
  name: string;
  components: Component[];
};

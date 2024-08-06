import React from "react";
import { TabBar as TabBarType } from "@/types/TabBar";
import TabBarClient from "@/components/TabBarClient";
import ComponentList from "@/components/ComponentList";

type TabBarProps = Omit<TabBarType, "_type" | "_key">;

export default function TabBar({
  id,
  tabs,
  blockPalette = "white",
}: TabBarProps) {
  return (
    <TabBarClient
      id={id}
      blockPalette={blockPalette}
      tabs={tabs.map((tab) => ({
        id: tab.id,
        name: tab.name,
        content: (
          <ComponentList
            components={tab.components.map((c) => ({
              ...c,
              blockPalette: blockPalette,
            }))}
          />
        ),
      }))}
    />
  );
}

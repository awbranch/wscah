"use client";

import React from "react";
import { Palette } from "@/types/Palette";
import { useQueryState } from "nuqs";
import clsx from "clsx";

type Tab = {
  id: string;
  name: string;
  content: React.ReactNode;
};

type TabBarClientProps = {
  id: string;
  tabs: Tab[];
  blockPalette: Palette;
};

export default function TabBar({ id, tabs, blockPalette }: TabBarClientProps) {
  const [selectedId, setSelectedId] = useQueryState(id);
  const selectedTab = tabs.find((tab) => tab.id === selectedId) || tabs[0];

  const setSelectedIdProxy = (id: string) => {
    console.log("setSelectedId", id);
    setSelectedId(id);
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          defaultValue={selectedTab?.id}
          className={clsx(
            "block w-full rounded-md py-2 pl-3 pr-10 text-base focus:outline-none sm:text-sm",
            "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          )}
          onChange={(e) => setSelectedIdProxy(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.id}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div
          className={clsx("border-b border-gray-200", {
            "border-grape-300": blockPalette === "blue",
            "border-gray-200": blockPalette === "white",
            "border-gray-300": blockPalette === "gray",
          })}
        >
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                onClick={() => setSelectedIdProxy(tab.id)}
                aria-current={tab.id === selectedTab?.id ? "page" : undefined}
                className={clsx(
                  tab.id === selectedTab?.id
                    ? {
                        "border-carrot-600 text-grape-600":
                          blockPalette === "white" || blockPalette === "gray",
                        "border-carrot-600 text-white": blockPalette === "blue",
                      }
                    : {
                        "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-500":
                          blockPalette === "white" || blockPalette === "gray",

                        "border-transparent text-grape-300 hover:border-gray-300 hover:text-gray-200":
                          blockPalette === "blue",
                      },
                  "cursor-pointer whitespace-nowrap border-b-4 px-1 py-4 font-medium",
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      {selectedTab && <div className="mt-6">{selectedTab.content}</div>}
    </div>
  );
}

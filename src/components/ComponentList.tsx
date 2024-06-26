import React from "react";
import { Component as ComponentType } from "@/types/Component";
import Announcement from "@/components/Announcement";
import Hero from "@/components/Hero";
import MediaCardSet from "@/components/MediaCardSet";
import CallToAction from "@/components/CallToAction";
import LatestNews from "@/components/LatestNews";
import IFrame from "@/components/IFrame";

type ComponentListProps = {
  components: ComponentType[];
};

export default function ComponentList({ components }: ComponentListProps) {
  return (
    <div className={"space-y-12"}>
      {components.map((c) => (
        <Component key={c._key} component={c} />
      ))}
    </div>
  );
}

type ComponentProps = {
  component: ComponentType;
};

function Component({ component }: ComponentProps) {
  switch (component._type) {
    case "hero":
      return <Hero {...component} />;

    case "mediaCardSet":
      return <MediaCardSet {...component} />;

    case "announcement":
      return <Announcement {...component} />;

    case "callToAction":
      return <CallToAction {...component} />;

    case "latestNews":
      return <LatestNews {...component} />;

    case "iframe":
      return <IFrame {...component} />;

    default:
      return (
        <div className={"bg-red-700 p-10 text-white"}>
          <h1 className={"font-semibold text-center text-3xl"}>
            Unknown Component: {component["_type"]}
          </h1>
        </div>
      );
  }
}

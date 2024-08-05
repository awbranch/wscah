import React from "react";
import { Component as ComponentType } from "@/types/Component";
import Announcement from "@/components/Announcement";
import Article from "@/components/Article";
import ButtonRow from "@/components/ButtonRow";
import CallToAction from "@/components/CallToAction";
import ComponentSetReference from "@/components/ComponentSetReference";
import EmbeddedHtml from "@/components/EmbeddedHtml";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import MediaCardSet from "@/components/MediaCardSet";
import TabBar from "@/components/TabBar";
import TeamList from "@/components/TeamList";
import Title from "@/components/Title";

type ComponentListProps = {
  components: ComponentType[];
};

export default function ComponentList({ components }: ComponentListProps) {
  return (
    <div className={"space-y-12"}>
      {components.map((c, i) => (
        <Component
          key={c._key}
          component={c}
          index={i}
          components={components}
        />
      ))}
    </div>
  );
}

type ComponentProps = {
  component: ComponentType;
  components: ComponentType[];
  index: number;
};

function Component({ component, index, components }: ComponentProps) {
  switch (component._type) {
    case "announcement":
      return <Announcement {...component} />;

    case "article":
      return <Article {...component} />;

    case "callToAction":
      return <CallToAction {...component} />;

    case "buttonRow":
      return <ButtonRow {...component} />;

    case "hero":
      return (
        <Hero {...component} componentsBelow={index < components.length - 1} />
      );

    case "embeddedHtml":
      return <EmbeddedHtml {...component} />;

    case "latestNews":
      return <LatestNews {...component} />;

    case "mediaCardSet":
      return <MediaCardSet {...component} />;

    case "tabBar":
      return <TabBar {...component} />;

    case "title":
      return <Title {...component} />;

    case "teamList":
      return <TeamList {...component} />;

    case "componentSetReference":
      return <ComponentSetReference {...component} />;

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

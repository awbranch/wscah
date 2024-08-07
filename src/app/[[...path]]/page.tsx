import { getPageByPath, getPages, getSettings, urlFor } from "@/utils/sanity";
import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import ComponentList from "@/components/ComponentList";
import { Component } from "@/types/Component";
import type { Metadata } from "next";
import { socialMediaImageDimensions } from "@/utils/globals";

import { Hero } from "@/types/Hero";

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((p) => ({ path: p.path.slice(1).split("/") }));
}

type Props = {
  params: { path: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const settings = await getSettings();
  const path = params && params.path ? params.path : [];

  const page = await getPageByPath(path);

  let meta: Metadata = {};
  if (page) {
    if (page.title) {
      meta.title = page.title + " | " + settings.title;
    }
    if (page.metaDescription) {
      meta.description = page.metaDescription;
    }
    if (page.path) {
      meta.alternates = {
        canonical: page.path,
      };

      if (settings.socialImage) {
        const { width, height } = socialMediaImageDimensions;
        const title = settings.title + (page.title ? " - " + page.title : "");
        meta.openGraph = {
          title: title,
          type: "website",
          url: page.path,
          images: urlFor(settings.socialImage)
            .fit("fill")
            .width(width)
            .height(height)
            .url(),
        };
      }
    }
  }

  return meta;
}

export default async function GenericPage({ params }: Props) {
  const path = params && params.path ? params.path : [];
  const page = await getPageByPath(path);

  return (
    <>
      {page?.showHeader && page.header && (
        <PageHeader {...page.header} pagePath={page.path} />
      )}
      {page?.blocks
        ?.filter((b) => !b.hidden)
        ?.map((b, i) => (
          <Section
            key={b._key}
            id={b.id}
            palette={b.palette}
            maxWidth={page.maxWidth}
            wallpaper={getSectionWallpaper(b.components)}
          >
            {b?.components && <ComponentList components={b.components} />}
          </Section>
        ))}
    </>
  );
}

function getSectionWallpaper(components?: Component[]) {
  if (components) {
    const index = components.findIndex((c) => c._type === "hero");
    if (index !== -1) {
      let hero = components[index] as Hero;
      if (hero.wallpaper) {
        return index < components.length - 1 ? "below-hero" : "bottom";
      }
    }
  }
}

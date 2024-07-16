import {
  getPageByPath,
  getPages,
  getSettings,
  urlFor,
} from "@/utils/sanity";
import React from "react";
import Section from "@/components/Section";
import ComponentList from "@/components/ComponentList";
import type { Metadata } from "next";
import { socialMediaImageDimensions } from "@/utils/globals";
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
    if (page.description) {
      meta.description = page.description;
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
      {/* {path.length > 1 && (
        <Container maxWidth={'lg'}>
          <BreadCrumbs routes={convertToRoutes(path)} />
        </Container>
      )} */}
      {page?.blocks
        ?.filter((b) => !b.hidden)
        ?.map((b) => (
          <Section
            key={b._key}
            id={b.id}
            palette={b.palette}
            maxWidth={page.maxWidth}
          >
            {b?.components && <ComponentList components={b.components} />}
          </Section>
        ))}
    </>
  );
}

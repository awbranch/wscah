import { toFullDate } from "@/utils/date";
import { getNews, getSettings, urlFor } from "@/utils/sanity";
import NewsSummaryGrid from "@/components/NewsSummaryGrid";
import Section from "@/components/Section";
import Container from "@/components/Container";
// import BreadCrumbs from '@/components/BreadCrumbs';
import React from "react";
import { H1, H2, Small } from "@/components/Typography";
import ComponentList from "@/components/ComponentList";
import { Metadata } from "next";
import Article from "@/components/Article";
import { News } from "@/types/News";
import { Palette } from "@/types/Palette";
import { socialMediaImageDimensions } from "@/utils/globals";
import { userHeaderClasses } from "@/utils/globals";
import clsx from "clsx";

// This line should be removed if exporting static pages
export const dynamicParams = false;

export async function generateStaticParams() {
  const stories = await getNews();
  return stories.map((s) => ({ slug: s.slug.current }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const settings = await getSettings();
  const stories = await getNews();
  const story = stories.find((s) => s.slug.current === params.slug);
  const path = `/news/story/${params.slug}`;

  let meta: Metadata = {
    alternates: {
      canonical: path,
    },
  };

  if (story) {
    const title = story.title
      ? `${story.title} - ${settings.title}`
      : settings.title;

    meta.title = title;

    if (story.summary) {
      meta.description = story.summary;
    }

    if (story.previewImage) {
      const { width, height } = socialMediaImageDimensions;
      meta.openGraph = {
        title: title,
        type: "website",
        url: path,
        images: urlFor(story.previewImage)
          .fit("fill")
          .width(width)
          .height(height)
          .url(),
      };
    }
  }

  return meta;
}

export default async function Page({ params }: Props) {
  // Its actually more efficient to get all the news stories since this is calculated
  // at build time and Next caches all query requests with the same parameters
  // Calling this would actually result in a separate API call to sanity
  const stories = await getNews();
  const story = stories.find((s) => s.slug.current === params.slug);

  if (!story) {
    return (
      <main>
        <Section palette={"white"} maxWidth={"md"}>
          <H1>Story: {params.slug} Not Found</H1>
        </Section>
      </main>
    );
  }

  const topStories = stories
    .filter((s) => s.slug.current !== story.slug.current)
    .slice(0, 3);

  addPalette(story, "white");

  return (
    <main>
      {/* <Container maxWidth={'lg'}>
        <BreadCrumbs
          routes={[
            { name: 'News', path: '/news' },
            { name: story.title, path: `/news/story/${story.slug.current}` },
          ]}
        />
      </Container> */}

      <Section id="story" maxWidth="md">
        <Small className={"mb-8"}>{toFullDate(story.date)}</Small>
        <Article text={story.text} blockPalette={"white"} columns={1} />
      </Section>

      {story?.blocks?.map((b) => (
        <Section key={b._key} id={b.id} palette={b.palette} maxWidth={"md"}>
          {b?.components && <ComponentList components={b.components} />}
        </Section>
      ))}

      <Section maxWidth="lg" palette="gray">
        <H1
          className={clsx(userHeaderClasses["gray"], "mb-10 mt-0 text-center")}
        >
          Latest News
        </H1>
        <NewsSummaryGrid
          blockPalette={"gray"}
          summaries={topStories.map((s) => ({
            _id: s._id,
            date: s.date,
            title: s.title,
            slug: s.slug,
            summary: s.summary,
            image: s.previewImage,
            category: s.category,
          }))}
        />
      </Section>
    </main>
  );
}

function addPalette(news: News, palette: Palette) {
  if (news.blocks) {
    news.blocks.forEach((b) => {
      if (b.components) {
        b.components.forEach((c) => (c.blockPalette = b.palette));
      }
    });
  }
}

"use client";
import React, { useState, useEffect } from "react";
import MediaCardSet from "@/components/MediaCardSet";
import { Slug } from "sanity";
import { Image } from "@/types/Image";
import { Palette } from "@/types/Palette";
import { NewsCategory } from "@/types/NewsCategory";
import { getNow, toUTCDate } from "@/utils/date";

type StorySummary = {
  _id: string;
  date: string;
  title: string;
  slug: Slug;
  summary: string;
  image: Image;
  categories: NewsCategory[];
};

type NewsSummaryGridProps = {
  blockId?: string;
  blockPalette?: Palette;
  stories: StorySummary[];
};

export default function NewsSummaryGrid({
  blockId,
  blockPalette,
  stories,
}: NewsSummaryGridProps) {
  const [now, setNow] = useState<Date>();

  useEffect(() => {
    setNow(new Date());
  }, []);

  return (
    <MediaCardSet
      blockId={blockId}
      blockPalette={blockPalette}
      palette="white"
      clickArea="card"
      cards={stories.map((s) => ({
        _key: s._id,
        _type: "imageCard" as const,
        image: s.image,
        eyebrow: getCategoryLabel(s, now),
        title: s.title,
        text: s.summary,
        href: `/news/story/${s.slug.current}`,
      }))}
    />
  );
}

function getCategoryLabel(story: StorySummary, now?: Date) {
  const category =
    story.categories.length > 0 ? story.categories[0].label : "News";

  if (now && now < toUTCDate(story.date)) {
    return "Upcoming " + category;
  }

  return category;
}

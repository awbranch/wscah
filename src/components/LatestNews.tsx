import React from "react";
import { LatestNews as Props } from "@/types/LatestNews";
import { getLatestNews } from "@/utils/sanity";
import LatestNewsClient from "@/components/LatestNewsClient";

export default async function LatestNews({
  blockId,
  blockPalette,
  count,
}: Props) {
  // Fetch the latest news
  const stories = await getLatestNews(count);

  return (
    <LatestNewsClient
      blockId={blockId}
      blockPalette={blockPalette}
      stories={stories.map((s) => ({
        _id: s._id,
        date: s.date,
        title: s.title,
        slug: s.slug,
        summary: s.summary,
        image: s.previewImage,
        categories: s.categories,
      }))}
    />
  );
}

import React from "react";
import { LatestNews as LatestNewsType } from "@/types/LatestNews";
import { getLatestNews } from "@/utils/sanity";
import NewsSummaryGrid from "@/components/NewsSummaryGrid";

type LatestNewsProps = Omit<LatestNewsType, "_type" | "_key"> & {
  componentsBelow?: boolean;
};

export default async function LatestNews({
  blockId,
  blockPalette,
  count,
}: LatestNewsProps) {
  // Fetch the latest news
  const stories = await getLatestNews(count);

  return (
    <NewsSummaryGrid
      blockId={blockId}
      blockPalette={blockPalette}
      summaries={stories.map((s) => ({
        _id: s._id,
        date: s.date,
        title: s.title,
        slug: s.slug,
        summary: s.summary,
        image: s.previewImage,
        category: s.category,
      }))}
    />
  );
}

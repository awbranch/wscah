import React from "react";
import { PageHeader as PageHeaderType } from "@/types/PageHeader";
import { getPages } from "@/utils/sanity";
import Container from "@/components/Container";
import BreadCrumbs, { BreadCrumbRoute } from "@/components/BreadCrumbs";
import { userPaletteClasses } from "@/utils/globals";
import HighlightedTitle from "@/components/HighlightedTitle";
import SimpleText from "@/components/SimpleText";

import clsx from "clsx";

type PageHeaderProps = PageHeaderType & {
  pagePath: string;
};

export default async function PageHeader({
  pagePath,
  palette = "blue",
  title,
  description,
  breadcrumbs,
  image,
  buttons,
  wallpaper = false,
}: PageHeaderProps) {
  let routes: Array<BreadCrumbRoute> = [];

  if (breadcrumbs) {
    const pages = await getPages();
    const parts = pagePath.slice(1).split("/");
    while (parts.length > 0) {
      const path = "/" + parts.join("/");
      const page = pages.find((p) => p.path === path);
      if (page) {
        routes.unshift({
          name: page.title,
          path: page.path,
        });
      }
      parts.pop();
    }
    routes.unshift({ name: "Home", path: "/" });
  }

  return (
    <section
      className={clsx(
        "pb-20 pt-16",
        userPaletteClasses[palette].block,
        "bg-[url('/confetti-right.svg')] bg-no-repeat",
        ["bg-[length:575px_449px]", "bg-[bottom_0px_right]"],
      )}
    >
      <Container>
        <div className="max-w-xl space-y-6">
          {breadcrumbs && <BreadCrumbs routes={routes} />}
          {title && (
            <HighlightedTitle
              title={title}
              blockPalette={palette}
              alignment="left"
              textSize="lg"
            />
          )}
          {description && <SimpleText text={description} />}
        </div>
      </Container>
    </section>
  );
}

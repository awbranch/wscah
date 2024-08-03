import { createClient, groq } from "next-sanity";
import { File, Image } from "sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Page } from "@/types/Page";
import { Footer } from "@/types/Footer";
import { Header } from "@/types/Header";
import { Settings } from "@/types/Settings";
import { News } from "@/types/News";
import { ComponentSet } from "@/types/ComponentSet";

const client = createClient({
  projectId: "n427st2j",
  dataset: "production",
  apiVersion: "2024-06-21",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(image: Image) {
  return builder.image(image);
}

export function urlForFile(file: File) {
  const { id, format } = fileAttributes(file);
  const config = client.config();
  return `https://cdn.sanity.io/files/${config.projectId}/${config.dataset}/${id}.${format}`;
}

export function fileAttributes(file: File) {
  const ref = file?.asset?._ref;
  if (!ref) {
    throw new Error(`File should have asset attribute`);
  }
  const [, id, format] = ref.split("-");

  if (!id || !format) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  return { id, format: format };
}

export function imageAttributes(image: Image) {
  const ref = image?.asset?._ref;
  if (!ref) {
    throw new Error(`Image should have asset attribute`);
  }
  const [, id, dimensionString, format] = ref.split("-");

  if (!id || !dimensionString || !format) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  const [imgWidthStr, imgHeightStr] = dimensionString.split("x");

  const width = +imgWidthStr;
  const height = +imgHeightStr;

  const isValidAssetId = isFinite(width) && isFinite(height);
  if (!isValidAssetId) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  return { id, width, height, format };
}

export async function getPages() {
  let pages = await client.fetch<Page[]>(
    groq`*[_type == "page"]`,
    {},
    fetchOptions(),
  );
  pages.forEach((p) => addBlockConfig(p));
  return pages;
}

export async function getPageByPath(path: string | string[]) {
  const pagePath = Array.isArray(path) ? "/" + path.join("/") : path;

  if (process.env.NODE_ENV === "development") {
    let page = await client.fetch<Page>(
      groq`*[_type == "page" && path == $path][0]`,
      {
        path: pagePath,
      },
      fetchOptions(),
    );
    addBlockConfig(page);
    return page;
  } else {
    // During production, since requests are cached it reduces api calls to get all pages
    let pages = await getPages();
    return pages.find((p) => p.path === pagePath);
  }
}

/**
 * It's helpful for components to know the palette of the blocks they are contained within
 * @param page
 */
function addBlockConfig(page?: Page) {
  if (page) {
    page?.blocks?.forEach((b) => {
      b?.components?.forEach((c) => {
        c.blockPalette = b.palette;
        c.blockId = b.id;
      });
    });
  }
}

export async function getNews() {
  return client.fetch<News[]>(
    groq`*[_type == "news" && hidden != true]{..., category->{label, value}} | order(date desc)`,
    {},
    fetchOptions(),
  );
}

export async function getSettings() {
  return client.fetch<Settings>(
    groq`*[_type == "settings"][0]`,
    {},
    fetchOptions(),
  );
}

export async function getHeader() {
  return client.fetch<Header>(
    groq`*[_type == "header"][0]`,
    {},
    fetchOptions(),
  );
}

export async function getFooter() {
  return client.fetch<Footer>(
    groq`*[_type == "footer"][0]`,
    {},
    fetchOptions(),
  );
}

export async function getLatestNews(count: number) {
  return client.fetch<News[]>(
    groq`*[_type == "news" && hidden != true]{..., category->{label, value}} | order(date desc) [0...$count]`,
    {
      count: count,
    },
    fetchOptions(),
  );
}

export async function getComponentSets() {
  return client.fetch<ComponentSet[]>(
    groq`*[_type == "componentSet"]`,
    {},
    fetchOptions(),
  );
}

export async function getComponentSet(id: string) {
  if (process.env.NODE_ENV === "development") {
    return client.fetch<ComponentSet>(
      groq`*[_id == $id][0]`,
      {
        id,
      },
      fetchOptions(),
    );
  } else {
    let s = await getComponentSets();
    return s.find((c) => c._id === id);
  }
}

function fetchOptions() {
  if (process.env.NODE_ENV === "development") {
    return { next: { revalidate: 5 } };
  } else {
    return {};
  }
}

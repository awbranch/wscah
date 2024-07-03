import { PortableTextBlock, PortableTextChild } from "sanity";

export function splitText(text: string) {
  return text
    .split(/\n+/)
    .filter((t) => t.length > 0)
    .map((t) => t.trim());
}

export function isFullyQualifiedURL(url?: string) {
  if (!url) return false;
  const pattern = /^(https?:\/\/).*$/i;
  return pattern.test(url);
}

export async function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function errorToString(error: any): string {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    return "Unknown error";
  }
}

export function trim(
  strings: TemplateStringsArray,
  ...values: string[]
): string {
  let result = "";
  strings.forEach((str, i) => {
    result += str + (values[i] || "");
  });

  return result
    .split("\n")
    .map((s) => s.trim())
    .join("\n");
}


export function blocksToText(blocks: PortableTextBlock[]) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return (block.children as PortableTextChild[]).map((child) => child.text).join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
}

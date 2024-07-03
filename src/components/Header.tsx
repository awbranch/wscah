import React from "react";
import { getHeader, getPages } from "@/utils/sanity";
import NavBar from "@/components/NavBar";
import { Palette } from "@/types/Palette";

export default async function Header() {
  const props = await getHeader();
  const pages = await getPages();

  const pagePalette = pages.reduce<Record<string, Palette>>((acc, page) => {
    acc[page.path] = page.blocks?.[0].palette || "white";
    return acc;
  }, {});

  return (
    <header>
      <NavBar menus={props.menus} pagePalette={pagePalette} alertMessage={props.showAlert ? props.alertMessage : undefined} />
    </header>
  );
}

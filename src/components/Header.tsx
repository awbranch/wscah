import React from "react";
import { getHeader, getPages } from "@/utils/sanity";
import NavBar from "@/components/NavBar";
import { Palette } from "@/types/Palette";

export default async function Header() {
  const props = await getHeader();
  const pages = await getPages();

  const pagePalette = pages.reduce<Record<string, Palette>>((acc, page) => {
    if(page.showHeader && page.header?.palette) { 
      acc[page.path] = page.header.palette;
    } else {
      acc[page.path] = page.blocks?.[0].palette || "white";
    }
    return acc;
  }, {});

  return (
    <header>
      <NavBar
        menus={props.menus}
        pagePalette={pagePalette}
        alert={props.showAlert ? {message: props.alertMessage, palette: props.alertPalette} : undefined}
      />
    </header>
  );
}

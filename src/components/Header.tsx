import React from "react";
import { getHeader } from "@/utils/sanity";
import AlertBar from "@/components/AlertBar";
import NavBar from '@/components/NavBar';

export default async function Header() {
  const props = await getHeader();
  return (
    <header>
      {props.showAlert && (
        <AlertBar message={props.alertMessage} palette={props.alertPalette} />
      )}
      <NavBar
        logo={props.logo}
        menus={props.menus}
      />
    </header>
  );
}

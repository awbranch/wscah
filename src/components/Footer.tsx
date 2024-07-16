import React from "react";
import { getFooter, getPages } from "@/utils/sanity";
import Container from "@/components/Container";
import Newsletter from "@/components/Newsletter";

export default async function Footer() {
  const props = await getFooter();
  const pages = await getPages();

  return (
    <footer className={"bg-grape-500 py-16 text-white md:py-20"}>
      <Container>
        {props.newsletter && (
          <Newsletter
            eyebrow={props.newsletter.eyebrow}
            title={props.newsletter.title}
            text={props.newsletter.text}
            label={props.newsletter.label}
            href={props.newsletter.href}
          />
        )}
      </Container>
    </footer>
  );
}

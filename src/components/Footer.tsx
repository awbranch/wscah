import React from "react";
import { getFooter, getPages } from "@/utils/sanity";
import Container from "@/components/Container";
import Newsletter from "@/components/Newsletter";
import ResponsiveImage from "@/components/ResponsiveImage";

export default async function Footer() {
  const props = await getFooter();
  const pages = await getPages();

  return (
    <footer className={"bg-grape-500 text-white"}>
      {props.newsletter && (
        <div
          className="bg-grape-600"
          style={{
            backgroundImage: `url('/angle-blue.png')`,
            backgroundSize: "100% 200px",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <div className="py-[95px]">
              <Newsletter
                eyebrow={props.newsletter.eyebrow}
                title={props.newsletter.title}
                text={props.newsletter.text}
                label={props.newsletter.label}
                href={props.newsletter.href}
              />
            </div>
          </Container>
        </div>
      )}

      <Container>
        {props.missionImage && (
          <div className="py-6 text-center">
            <ResponsiveImage
              className="inline-block"
              image={props.missionImage}
              sizes={`50vw`}
            />
          </div>
        )}
      </Container>
    </footer>
  );
}

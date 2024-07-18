import React from "react";
import { getFooter, getPages } from "@/utils/sanity";
import Container from "@/components/Container";
import Newsletter from "@/components/Newsletter";
import ResponsiveImage from "@/components/ResponsiveImage";
import SocialIcon from "@/components/SocialIcon";
import Link from "next/link";
import clsx from "clsx";

export default async function Footer() {
  const {
    newsletter,
    missionImage,
    organization,
    addresses,
    phone,
    fax,
    social,
    siteMap,
    legal,
  } = await getFooter();

  const pages = await getPages();

  return (
    <footer className={"bg-grape-500 text-white"}>
      {newsletter && (
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
            <div className="py-10 md:py-[95px]">
              <Newsletter
                eyebrow={newsletter.eyebrow}
                title={newsletter.title}
                text={newsletter.text}
                label={newsletter.label}
                href={newsletter.href}
              />
            </div>
          </Container>
        </div>
      )}

      {missionImage && (
        <Container>
          <div className="py-6 text-center">
            <ResponsiveImage
              className="inline-block"
              image={missionImage}
              sizes={`50vw`}
            />
          </div>
        </Container>
      )}

      <div
        className={clsx([
          "pb-6 md:pb-[150px]",
          "bg-[url('/confetti.svg')] bg-no-repeat",
          "bg-[length:1296px_540px] md:bg-[length:1440px_600px]",
          "bg-[bottom_-120px_center] md:bg-[bottom_-140px_center]",
        ])}
      >
        <Container>
          <div className="grid grid-cols-1 gap-6 pb-20 pt-10 md:grid-cols-2">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="flex-none">
                <img className="flex-none" src="/logo-light.svg" width="52" />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <div className="space-y-[10px]">
                  <div className="">{organization}</div>
                  <div className="inline-block divide-y">
                    {addresses.map((add, i) => (
                      <address key={i} className="py-1 not-italic">
                        {add.street}
                        <br />
                        {add.city} {add.state}, {add.zip}
                      </address>
                    ))}
                  </div>
                </div>
                <address className="not-italic">
                  {phone && (
                    <span className="block">
                      Telephone:{" "}
                      <a href={`tel:${phone.replace(/\D/g, "")}`}>{phone}</a>
                    </span>
                  )}
                  {fax && <span className="block">Fax: {fax}</span>}
                </address>
                <ul className="hidden gap-3 md:flex">
                  {social.map((s) => (
                    <li key={s.service}>
                      <SocialIcon service={s.service} url={s.url} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ul className="columns-1 space-y-5 md:columns-2 lg:columns-3">
                {siteMap.map((item, i) => (
                  <li key={i} className="text-center">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="mt-4 flex justify-center gap-3 md:hidden">
              {social.map((s) => (
                <li key={s.service}>
                  <SocialIcon service={s.service} url={s.url} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      {legal && (
        <div className="bg-grape-700">
          <Container>
            <div className="flex min-h-[60px] items-center justify-center gap-x-3 px-6 py-3 text-center text-sm text-white sm:px-3.5">
              {legal}
            </div>
          </Container>
        </div>
      )}
    </footer>
  );
}

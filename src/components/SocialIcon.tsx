import React from "react";
import { SocialMediaService } from "@/types/Social";
import Link from "next/link";
import Image from "next/image";

type SocialIconProps = {
  service: SocialMediaService;
  url: string;
};

function SocialIcon({ service, url }: SocialIconProps) {
  return (
    <Link
      className="hover:bg-grap flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white hover:bg-grape-300"
      href={url}
    >
      <Image
        src={`/social/${service}.svg`}
        width={17}
        height={17}
        alt={service}
      />
    </Link>
  );
}

export default SocialIcon;

import React from "react";
import Link from "next/link";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

type Props = {
  message: PortableTextBlock[];
};

export default function AlertRichText({ message }: Props) {
  const components = {
    marks: {
      link: ({
        children,
        value,
      }: {
        children: React.ReactNode;
        value: any;
      }) => <Link href={value.href}>{children}</Link>,
      em: ({ children }: { children: React.ReactNode }) => <em>{children}</em>,
      strong: ({ children }: { children: React.ReactNode }) => (
        <strong className="font-semibold">{children}</strong>
      ),
    },
    block: {
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="text-center text-sm xl:text-base">{children}</p>
      ),
    },
  };

  return <PortableText value={message} components={components as any} />;
}

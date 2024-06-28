import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

/**
 * Breaks a string delimited by newlines into a set of paragraphs
 */
export default function SimpleText({ text, className }: Props) {
  return (
    <div className={twMerge("space-y-4", className)}>
      {text.split(/\n+/).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export type BreadCrumbRoute = {
  name: string;
  path: string;
};

type BreadCrumbsProps = {
  routes: BreadCrumbRoute[];
};

export default function BreadCrumbs({ routes }: BreadCrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex gap-1.5">
        {routes.map((r, i) => (
          <li key={r.path}>
            <div className="flex items-center gap-1.5">
              {i < routes.length - 1 ? (
                <>
                  <Link
                    href={r.path}
                    className="text-sm"
                    aria-current={i === routes.length - 1 ? "page" : undefined}
                  >
                    {r.name}
                  </Link>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <span className="text-sm opacity-70">{r.name}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

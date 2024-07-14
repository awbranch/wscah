import Link from "next/link";
import { DisclosureButton } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { twJoin } from "tailwind-merge";

type Variant = "text" | "button";

const commonClasses = "px-3 py-2 text-lg flex items-center";

const variantClasses: { [V in Variant]: string } = {
  text: "text-white font-medium hover:underline hover:underline-offset-2",
  button:
    "font-black px-6 py-4 rounded-md bg-carrot-600 text-white hover:bg-carrot-700 focus-visible:outline-carrot-600",
};

type MobileMenuButtonProps = {
  name: string;
  variant: Variant;
} & (
  | {
      menu: true;
      open: boolean;
    }
  | {
      menu: false;
      href: string;
      onClick: () => void;
    }
);

export default function MobileMenuButton(props: MobileMenuButtonProps) {
  const { name, variant, menu } = props;
  if (menu) {
    const { open } = props;
    return (
      <DisclosureButton
        className={twJoin(commonClasses, variantClasses[variant])}
      >
        {name}
        <ChevronRightIcon
          className={twJoin(open ? "rotate-90" : "", "h-6 w-6 flex-none")}
          aria-hidden="true"
        />
      </DisclosureButton>
    );
  } else {
    const { href, onClick } = props;
    return (
      <Link
        className={twJoin(commonClasses, variantClasses[variant])}
        href={href}
        onClick={onClick}
      >
        {name}
      </Link>
    );
  }
}

import type { Palette } from "@/types/Palette";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { twJoin } from "tailwind-merge";

type Props = {
  palette: Palette;
  onClick: () => void;
};

export default function HamburgerButton({ palette, onClick }: Props) {
  return (
    <button
      type="button"
      className={twJoin(
        "rounded-sm inline-flex items-center justify-center p-[10px]",
        palette === "blue"
          ? "bg-grape-700 text-white hover:bg-white hover:text-grape-600"
          : "bg-carrot-600 text-white hover:bg-carrot-700",
      )}
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className={"h-6 w-6"} aria-hidden="true" />
    </button>
  );
}

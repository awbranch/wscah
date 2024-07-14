import Link from "next/link";

type MenuItemProps = {
  name: string;
  href: string;
  onClick: () => void;
};

export default function MenuItem({ name, href, onClick }: MenuItemProps) {
  return (
    <Link
      href={href}
      className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-white hover:bg-grape-500"
      onClick={onClick}
    >
      {name}
    </Link>
  );
}

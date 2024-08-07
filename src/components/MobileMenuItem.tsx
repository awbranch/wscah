import Link from "next/link";

type MobileMenuItemProps = {
  name: string;
  href: string;
  onClick: () => void;
};

export default function MobileMenuItem({ name, href, onClick }: MobileMenuItemProps) {
  return (
    <Link
      href={href}
      className="block px-6 py-4 text-center text-sm font-medium text-white hover:underline hover:underline-offset-2"
      onClick={onClick}
    >
      {name}
    </Link>
  );
}

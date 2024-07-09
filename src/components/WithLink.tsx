import Link from "next/link";

type WithLinkProps = {
  href?: string;
  children: React.ReactNode;
};

export default function WithLink({ href, children }: WithLinkProps) {
  return <>{href ? <Link href={href}>{children}</Link> : children}</>;
}

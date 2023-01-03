import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type TextLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};
export const ButtonLink = ({ children, href, className }: TextLinkProps) => {
  return (
    <button className={clsx("btn btn-link", className)}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </button>
  );
};

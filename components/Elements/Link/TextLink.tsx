import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type TextLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};
export const TextLink = ({ children, href, className }: TextLinkProps) => {
  return (
    <Link href={href}>
      <a className={clsx("link link-hover link-neutral", className)}>
        {children}
      </a>
    </Link>
  );
};

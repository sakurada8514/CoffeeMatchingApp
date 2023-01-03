import { ReactElement } from "react";

type LayoutProps = {
  children: ReactElement;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen pt-20">
      <div className="w-full max-w-md p-4 mx-auto rounded-lg border">
        {children}
      </div>
    </div>
  );
};

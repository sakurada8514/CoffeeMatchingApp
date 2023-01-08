import { ReactElement } from "react";

type LayoutProps = {
  children: ReactElement;
  title: string;
};
export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <main>
      <div className="min-h-screen pt-10 pb-10">
        <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
        <div className="w-full max-w-md p-4 mx-auto rounded-lg border">
          {children}
        </div>
      </div>
    </main>
  );
};

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: "coffee" | "light";
};
export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  // テーマ変えれるようにする
  return <div data-theme={theme}>{children}</div>;
};

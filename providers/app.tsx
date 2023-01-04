import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import i18next from "i18next";
import * as z from "zod";
import translation from "zod-i18n-map/locales/ja/zod.json";
import { zodI18nMap } from "zod-i18n-map";
import { ThemeProvider } from "./theme";

i18next.init({
  lng: "ja",
  resources: {
    ja: { zod: translation },
  },
  interpolation: {
    skipOnVariables: false,
  },
});
z.z.setErrorMap(zodI18nMap);

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme="light">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
            loading...
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  );
};

import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { AppProvider } from "providers/app";
import awsExports from "../aws-exports";
import "styles/globals.css";

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

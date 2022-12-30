import type { AppProps } from "next/app";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import "@/styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="coffee" className="min-h-screen">
      <Component {...pageProps} />;
    </div>
  );
}

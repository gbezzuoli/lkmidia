import { DrawerProvider } from "@/contexts/DrawerContext";
import "@/styles/global.css";
import { I18nextProvider } from "react-i18next";
import type { AppProps } from "next/app";

import { i18n } from "@/translations/config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n as any}>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </I18nextProvider>
  );
}

import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { LayoutTree } from "@moxy/next-layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <LayoutTree Component={Component} pageProps={pageProps} />;
}
export default MyApp;

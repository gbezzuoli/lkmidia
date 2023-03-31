import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";

interface DefaultLayoutProps {
  children: React.ReactNode;
  meta?: {
    title: string;
  };
}
export const DefaultLayout = ({ children, meta }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta?.title ?? "HenriqueDev | Home"}</title>
        <meta name="description" content="Henrique | Software Engineering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

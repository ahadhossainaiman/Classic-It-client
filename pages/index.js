import { Inter } from "next/font/google";
import RootLayouts from "@/components/Layouts/RootLayouts";
import Head from "next/head";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const { name, email, photo_url } = useSelector((state) => state.userSlice);
  console.log(name, email, photo_url, "aiman");
  return (
    <>
      <Head>
        <title>Trendy-Tech</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Aiman</h1>
    </>
  );
}
HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

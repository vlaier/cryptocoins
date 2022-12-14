import Head from "next/head";
import Navbar from "../Navbar/Navbar";
export default function Layout({ children, title = "CryptoCoins" }) {
  return (
    <div className="h-screen w-screen bg-primary relative overflow-y-scroll flex flex-col-reverse lg:flex-row ">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="overflow-y-scroll lg:w-full">
        <main className=" h-full px-5 py-5">{children}</main>
      </div>
    </div>
  );
}

import Head from "next/head";
import Header from "@/components/Organisms/Header/Header";
import Banner from "@/components/Atoms/Banner";
import ServiceCard from "@/components/Molecules/ServiceCard";
import Footer from "@/components/Organisms/Footer";
import About from "@/components/Molecules/About";
import Levels from "@/components/Molecules/Levels";
import Slider from "@/components/Organisms/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marks - IT Consulting & Services</title>
        <meta name="description" content="Marks - IT Consulting & Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <ServiceCard />
        <About />
        <Slider />
        <Levels />
      </main>
      <Footer />
    </>
  );
}

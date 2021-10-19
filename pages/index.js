import Head from "next/head";
import { server } from "../config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Socialrow from "@/components/Socialrow";
import FpProject from "@/components/FpProject";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>claudiamarie.me</title>
        <meta
          name='react portfolio'
          content='web development, programming, next.js'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant&family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Nav />
      <Hero />
      <About />
      <FpProject title={projects.title} description={projects.description} />
      <Socialrow />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects/4`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

import Head from "next/head";
import { PrismaClient } from "@prisma/client";
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
          name='description'
          content='JavaScript web development and app creator'
        />
        <meta
          name='keyword'
          content='portfolio, javascript, developer, claudiamarie'
        />
        <meta
          content='width=device-width, initial-scale=1, 
      shrink-to-fit=no'
        />
        <meta
          property='og:title'
          content='claudiamarie | Front End Web Developer'
        />
        <meta
          property='og:description'
          content='JavaScript development and app creator'
        />
        <meta property='og:image' content='/me.jpg' />
        <meta property='og:url' content='https://claudiamarie.me/' />
        <meta property='og:type' content='website' />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant&family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Nav />
      <Hero />
      <About />
      <FpProject
        title={projects.title}
        description={projects.description}
        image={projects.image}
        id={projects.id}
      />
      <Socialrow />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const projects = await prisma.projects.findUnique({
    where: {
      id: 2,
    },
  });
  return {
    props: { projects },
  };
}

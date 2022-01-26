import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Socialrow from "@/components/Socialrow";
import FpProject from "@/components/FpProject";
import { projects } from "data";

export default function Home({ projects }) {
  console.log(projects);
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
      <FpProject
        title={projects.title}
        description={projects.description}
        image={projects.image}
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
      id: 5,
    },
  });
  return {
    props: { projects },
  };
}

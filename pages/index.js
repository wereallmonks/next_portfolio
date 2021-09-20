import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import About from "../components/About";
import Hero from "../components/Hero";
import Socialrow from "../components/Socialrow";

const Home = () => {
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
      <Socialrow />
      <Footer />
    </>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const projects = await res.json()

//   return {
//     props: {
//       projects,
//     },
//   }
// }

export default Home;

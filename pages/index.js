import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Head from "next/head";

import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <Head>
        <title>Simple Blog</title>
        <meta property="og:title" content="Simple Blog" />
        <meta
          property="og:description"
          content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Consectetur libero id faucibus nisl tincidunt. Facilisi etiam
          dignissim diam quis enim lobortis. Elit eget gravida cum sociis
          natoque. Purus gravida quis blandit turpis. Est pellentesque elit
          ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque
          felis. Donec ac odio tempor orci. Nam aliquam sem et tortor"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/home-cover.png" />
      </Head>
      <Header />
      <main>
        <section className="home-cover">
          <img src="/images/home-cover.png" alt="" />
          <div className="overlay">
            <div className="container">
              <h1>Simple Blog.</h1>
              <p>A blog created by FikraCamps</p>
            </div>
          </div>
        </section>
        <section className="container blog-list">
          {props.posts.articles.map((item) => (
            <Card key={item.id} article={item} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://mashriq.herokuapp.com/dash/v1/articles");
  const posts = await res.json();

  // const fileData = fs.readFileSync(
  //   path.join(process.cwd(), "/file.json"),
  //   "utf8"
  // );
  // //console.log(fileData)

  return {
    props: {
      posts,
    },
  };
}

export default Home;

import Head from "next/head";
import Photos from "../components/Photos";
import { v4 as uuid } from "uuid";
import Header from "../components/Header";
import * as Vibrant from "node-vibrant";

export default function Home({ links }) {
  return (
    <div className="container">
      <Header />
      <Photos links={links} />

      <style global jsx>{`
        body {
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  let links = [];
  for (let i = 0; i < 10; i++) {
    let link = `https://picsum.photos/400/225?random=${i}`;

    links.push({
      link,
      id: uuid(),
    });
  }

  return {
    props: {
      links,
    },
  };
}

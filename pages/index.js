import Head from "next/head";
import Photos from "../components/Photos";
import { v4 as uuid } from "uuid";

export default function Home({ links }) {
  return (
    <div className="container">
      <div className="row">
        <Photos links={links} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let links = [];
  for (let i = 0; i < 10; i++) {
    let ran = Math.round(200 * Math.random() + i);
    links.push({
      link: `https://i.picsum.photos/id/${ran}/400/225.jpg`,
      id: uuid(),
    });
  }

  return {
    props: {
      links,
    },
  };
}

import Head from "next/head";
import Photos from "../components/Photos";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <Photos />
      </div>
    </div>
  );
}

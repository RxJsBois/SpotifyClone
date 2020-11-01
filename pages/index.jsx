import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="homePage">
      <Head>
        <title>Spotify</title>
        <script
          src="https://kit.fontawesome.com/0dde756733.js"
          defer
          crossOrigin="anonymous"
        ></script>
      </Head>
      <NavBar />
      <div className="homePage__content">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

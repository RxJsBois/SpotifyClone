import Head from "next/head";
import FriendSection from "../components/FriendSection";
import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <div id="homePage">
      <Head>
        <title>Spotify</title>
        <script
          src="https://kit.fontawesome.com/0dde756733.js"
          defer
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
      <div id="main">
        <SideNavBar />
        <MainContent />
        <FriendSection />
      </div>
      <Footer />
    </div>
  );
}

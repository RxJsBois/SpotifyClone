import { useEffect, useState } from "react";
import Album from "./Album";
import Header from "./Header";

export default function MainContent() {
  const [songs, setSongs] = useState([]);

  function scrollFunction() {
    const main = document.querySelector("#MainContent");
    const nav = document.querySelector("#myNavbar");

    if (main.scrollTop > 30) {
      nav.classList.remove("head");
      nav.classList.add("shrink");
    }
    if (main.scrollTop < 30) {
      nav.classList.add("head");
      nav.classList.remove("shrink");
    }
  }

  async function getData() {
    await fetch("/api/getartists")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSongs(data.data);
        console.log(data.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const main = document.querySelector("#MainContent");
    main.addEventListener("scroll", () => scrollFunction());
    return main.removeEventListener("scroll", () => scrollFunction());
  }, []);

  return (
    <div id="MainContent">
      <div id="myNavbar" className="head">
        <Header />
        <h1>Home</h1>
      </div>
      <h3>Made for you</h3>
      <div className="homePage__firstRow">
        {songs.map((song) => {
          return (
            <Album
              key={song.id}
              image={song.album.cover_xl}
              albumName={song.album.title}
              artist={song.artist.name}
              url={song.preview}
            />
          );
        })}
      </div>
    </div>
  );
}

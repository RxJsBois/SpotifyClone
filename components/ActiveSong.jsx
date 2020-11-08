import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function ActiveSong({ songTitle, albumCover, artist }) {
  return (
    <div className="activeSong">
      <div className="activeSong__albumCover">
        <img src={albumCover} />
      </div>

      <div>
        <h3>{songTitle}</h3>
        <p>{artist}</p>

        <FavoriteBorderIcon className="activeSong__likeButton" />
      </div>
    </div>
  );
}

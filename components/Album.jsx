export default function Album({ image, albumName, artist, url }) {
  return (
    <div className="homePage__album">
      <div className="homePage__album__cover">
        <img src={image} />
      </div>
      <div className="homePage__album__deets">
        <b>{albumName}</b>
        <p style={{ fontSize: "14px" }}>{artist}</p>
        <audio src={url} controls></audio>
      </div>
    </div>
  );
}

export default function Album({ image, albumName, artist }) {
  return (
    <div className="homePage__album">
      <div className="homePage__album__cover">
        <img src={image} />
      </div>
      <div className="homePage__album__deets">
        <b>{albumName}</b>
        <p style={{ fontSize: "14px" }}>{artist}</p>
      </div>
    </div>
  );
}

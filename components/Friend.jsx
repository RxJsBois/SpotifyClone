export default function Friend({ name, status, latest_artist, latest_song }) {
  return (
    <div className="friend">
      <i className="fas fa-user-tie fa-2x" />
      <div className="details">
        <h4>{name}</h4>
        <p>{status}</p>
        <p>{latest_artist}</p>
        <p>{latest_song}</p>
      </div>
    </div>
  );
}

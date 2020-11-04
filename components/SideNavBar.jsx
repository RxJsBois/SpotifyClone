export default function SideNavBar() {
  return (
    <div id="SideNavBar">
      <div id="nav">
        <div className="nav-item">
          <i className="fas fa-home fa-lg" />
          <h2>Home</h2>
        </div>
        <div className="nav-item">
          <i className="fas fa-mouse-pointer fa-lg" />
          <h2>Browse</h2>
        </div>
        <div className="nav-item">
          <i className="fas fa-broadcast-tower fa-lg" />
          <h2>Radio</h2>
        </div>
      </div>
      <div id="library">
        <h3>My Library</h3>
        <p>Made For You</p>
        <p>Recently Played</p>
        <p>Liked Songs</p>
        <p>Albums</p>
        <p>Artists</p>
        <p>Podcasts</p>
      </div>
      <div id="playlists">
        <h3>Playlists</h3>
        <p>La La Land Sound Track</p>
        <p>Browse</p>
        <p>Radio</p>
      </div>
    </div>
  );
}

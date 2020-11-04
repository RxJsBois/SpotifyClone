import Album from "./Album";

export default function MainContent() {
  return (
    <div id="MainContent">
      <b>Made for you</b>
      <div className="homePage__firstRow">
        <Album
          image="https://upload.wikimedia.org/wikipedia/en/8/8a/Coldplay_-_Ghost_Stories.png"
          albumName="Ghost Stories"
          artist="ColdPlay"
        />

        <Album
          image="https://upload.wikimedia.org/wikipedia/en/8/8a/Coldplay_-_Ghost_Stories.png"
          albumName="Ghost Stories"
          artist="ColdPlay"
        />

        <Album
          image="https://upload.wikimedia.org/wikipedia/en/8/8a/Coldplay_-_Ghost_Stories.png"
          albumName="Ghost Stories"
          artist="ColdPlay"
        />
        <Album
          image="https://upload.wikimedia.org/wikipedia/en/8/8a/Coldplay_-_Ghost_Stories.png"
          albumName="Ghost Stories"
          artist="ColdPlay"
        />

        <Album
          image="https://upload.wikimedia.org/wikipedia/en/8/8a/Coldplay_-_Ghost_Stories.png"
          albumName="Ghost Stories"
          artist="ColdPlay"
        />
      </div>
      <h3>New Releases for you</h3>
    </div>
  );
}

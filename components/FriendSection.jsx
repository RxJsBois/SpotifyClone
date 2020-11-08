import Friend from "./Friend";

export default function FriendSection() {
  return (
    <div id="FriendSection">
      <div id="friendNav">
        <h2>Friend Activity</h2>
        <Friend
          name="Gautam"
          status="Sleeping"
          latest_artist="ColdPlay"
          latest_song="Sky Full of Stars"
        />
      </div>
    </div>
  );
}

import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Track from "./Track";

export default function Spotify() {
  const { data } = useSWR("/api/tracks", fetcher);

  if (!data) {
    return null;
  }

  return data.tracks.map((track, index) => (
    <Track ranking={index + 1} key={track.songUrl} {...track} />
  ));
}

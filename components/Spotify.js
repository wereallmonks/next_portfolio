import useSWR from "swr";
import Track from "./Track";
import fetch from "unfetch";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Spotify() {
  const { data } = useSWR("/api/tracks", fetcher);

  if (!data) {
    return null;
  }

  return data.tracks.map((track, index) => (
    <Track ranking={index + 1} key={track.songUrl} {...track} />
  ));
}

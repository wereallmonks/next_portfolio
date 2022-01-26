import { server } from "config";

export function getURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE ||
    `${server}/api/projects/`
  }${path}`;
}
export async function fetchAPI(path) {
  const requestUrl = getURL(path);
  const res = await fetch(requestUrl);
  const projects = await res.json();
  return projects;
}

import { server } from "config";

export async function fetchAPI() {
  const res = await fetch(`${server}/api/projects/`);
  const projects = await res.json();
  return projects;
}

export function getURL(path = "") {
  return `${
    process.env.DATABASE_URL || "https://localhost:3000/api/projects/"
  }${path}`;
}
export async function fetchAPI(path) {
  const requestUrl = getURL(path);
  const res = await fetch(requestUrl);
  const projects = await res.json();
  return projects;
}

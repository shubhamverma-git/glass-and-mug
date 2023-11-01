import axios from "axios";

export function getBlogData() {
  return axios.get(
    "https://osmicglass.droot.in/api/blogpage?populate=hero_container"
  );
}

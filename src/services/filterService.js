import axios from "axios";

export async function getAllFilterPills(filterType) {
  return await axios.get(`https://osmicglass.droot.in/api/${filterType}`);
}
// categories
// materials

import axios from "axios";

export function getMoreData() {
  return axios.get(
    "https://osmicglass.droot.in/api/productpage?populate=productpage_banner,materials,product_types"
  );
}

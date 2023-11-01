import axios from "axios";

export function getAllProducts() {
  return axios.get("https://osmicglass.droot.in/api/products?populate=*");
}

export function getProductDetails(id) {
  return axios.get(
    `https://osmicglass.droot.in/api/products?[filters][id][$eq]=${id}&populate=*`
  );
}

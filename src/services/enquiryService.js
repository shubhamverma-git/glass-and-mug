import axios from "axios";

export async function enquiryForm(formData) {
  return await axios.post(`https://osmicglass.droot.in/api/enquiries`, {
    data: formData,
  });
}

export async function uploadItem(item) {
  return await axios.post(`https://osmicglass.droot.in/api/upload`, item);
}

export async function subscribe(email) {
  return await axios.post(`https://osmicglass.droot.in/api/subscribers`, {
    data: email,
  });
}

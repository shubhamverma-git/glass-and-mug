import axios from "axios";

export function getContactData() {
  return axios.get(
    "https://osmicglass.droot.in/api/contact-page?populate=Contact_hero,contact_header,contact_culture_section.contact_culture_header,contact_culture_section.contact_image"
  );
}

import axios from "axios";

export function getAboutData() {
  return axios.get(
    "https://osmicglass.droot.in/api/aboutpage?populate=about_hero_section.about_description,about_hero_section.about_banner,about_hero_section.matrices,about_body_content.mission_section_block,about_body_content.image.image,culture_section.culture_details,culture_section.socials,culture_section.culture_image,faq_block.faq_section,faq_block.about_faq "
  );
}

// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products and Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { name: "About us", url: "/" },
      { name: "Products", url: "/services" },
      { name: "Contact", url: "/contact" },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  linkedin: "https://www.linkedin.com/company/desacode/",
  instagram: "https://www.instagram.com/desacodeid/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};

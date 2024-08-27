import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Desacode",
  author: "Desacode",
  tagline: "Simplifying Complexity, Enabling Growth",
  description: "Transform your business journey by simplifying complexities and unleashing unprecedented growth opportunities.",
  url: "https://desacode.com",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://desacode.com",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Simplifying Complexity, Enabling Growth`,
  description: "Transform your business journey by simplifying complexities and unleashing unprecedented growth opportunities.",
  image: ogImageSrc,
};

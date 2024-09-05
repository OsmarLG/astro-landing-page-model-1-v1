const companyName = "Company Name";
const companyLogoPath = "/favicon.svg";
const companyNumber = "+526151559659";
const companyEmail = "hola@companyname.com";
const companyAddress =
  "Hilario Perez 152, Revolucion II, 23075, La Paz, México";
const companyAddressLink = `https://www.google.com/maps?q=${encodeURIComponent(companyAddress)}`;

export const config = {
  companyName,
  companyNumber,
  companyEmail,
  companyAddress,
  companyAddressLink,
  companyLogo: {
    path: companyLogoPath,
    alt: companyName,
  },
  social: {
    facebook: "/companyName",
    instagram: "/companyName",
    twitter: "/companyName",
    linkedin: "/companyName",
  },
  bluelink: {
    siteName: "BlueLink IT Solutions",
    siteUrl: "https://www.bluelink.com.mx",
    logo: "/favicon.svg",
  },
};

import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "Unitechlabs",
        tagline: "Commited to Growth & Essential Technology Services",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com/unitechlabs"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://www.linkedin.com/company/unitech-labs"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://api.whatsapp.com/send/?phone=919591066613&text&app_absent=0"
            },
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com/unitech_labs"
            },
            
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/#aboutus" },
            { name: "Work", url: "/#work" },
            { name: "Services", url: "/#services" },
            { name: "Pricing", url: "/#pricing" }
        ]
    },
    otherPages: {
        name: "Other Pages",
        links: [
            { name: "Error 404", url: "/not-found" },
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
            { name: "Privacy Policy", url: "/privacy-policy" },
            { name: "Documentation", url: "/documentation" }
        ]
    },
    contactDetails: {
        name:"Contact Details",
        address: "KFC building, 31, 17th Cross Rd, MRCR Layout, Bengaluru, Karnataka India 560040",
        email: "hello@unitechclub.com",
        phone: "959 1066 613"
    },
    copyright: "©2025 Unitechlabs. All Rights Reserved"
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};

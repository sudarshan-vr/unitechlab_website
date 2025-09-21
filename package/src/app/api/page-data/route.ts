import { NextResponse } from 'next/server'
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList: brand[] = [
  {
    image: '/images/home/brand/navkis.svg',
    darkImg: '/images/home/brand/navkis.svg',
    title: 'Navkis',
  },
  {
    image: '/images/home/brand/aqresearchs.svg',
    darkImg: '/images/home/brand/aqresearchs.svg',
    title: 'AQ Researchs',
  },
  {
    image: '/images/home/brand/drkiteacademy.svg',
    darkImg: '/images/home/brand/drkiteacademy.svg',
    title: 'Dr Kite Academy',
  },
  {
    image: 'https://yourtechclub.com/wp-content/uploads/2023/12/Logo-9.svg',
    darkImg: 'https://yourtechclub.com/wp-content/uploads/2023/12/Logo-9.svg',
    title: 'Sai Vidhya Institue of Technology',
  },
  {
    image: 'http://aroushtech.in/wp-content/uploads/2025/06/AS-ED-LOGO-11_-_Edited-removebg-preview.png',
    darkImg: 'http://aroushtech.in/wp-content/uploads/2025/06/AS-ED-LOGO-11_-_Edited-removebg-preview.png',
    title: 'Aroush Solutions',
  },
  {
    image: 'https://yourtechclub.com/wp-content/uploads/2024/03/TOTO-Dark.svg',
    darkImg: 'https://yourtechclub.com/wp-content/uploads/2024/03/TOTO-Dark.svg',
    title: 'Navkis Gokula',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Custom Software Development',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Web & Mobile Application Development',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'AI Integration / Automation',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Blockchain & Web3 Solutions',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Internet of Things (IoT) & Smart Devices',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: '/images/home/onlinePresence/Overview-of-IoT-in-Agriculture-6_11zon.webp',
    title: 'Internet Of Things',
    tag: ['IoT', 'Research Studies', 'Product Development'],
    link: 'https://portfolio.unitechclub.com/projects',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Mobile App & Web Developments',
    tag: ['UI/UX Research', 'E-commerce solutions'],
    link: 'https://portfolio.unitechclub.com/projects',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.webp',
    title: 'AI & Data',
    tag: ['Custom AI Models', 'Chatbots'],
    link: 'https://portfolio.unitechclub.com/projects',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.png',
    title: 'Blockchain & Web3 Solutions',
    tag: ['Cryptocurrency', "NFT's", 'Dapps', 'DeFi'],
    link: 'https://portfolio.unitechclub.com/projects',
  },
  
]

const creativeMindList: creativeMind[] = [
  {
    image: '/images/home/creative/globe.svg',
    name: 'Sudharshan VR',
    position: 'Founder & CEO',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://www.linkedin.com/in/sudarshan-vr/',
  },
  {
    image: '/images/home/creative/globe.svg',
    name: 'Sudharsan K',
    position: 'Co-CEO',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://www.linkedin.com/company/unitech-labs',
  },
  {
    image: '/images/home/creative/globe.svg',
    name: 'Manjunath S',
    position: 'Investor & Advisor',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://www.linkedin.com/company/unitech-labs',
  },
  {
    image: '/images/home/creative/globe.svg',
    name: 'Farhan Sheikh',
    position: 'Co-Founder',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://www.linkedin.com/company/unitech-labs',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Creativity',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Integrity',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Website Development',
    plan_descp: 'For businesses who need a professional online presence.',
    plan_price: '$250',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Responsive & SEO-optimized design',
      'Upto 10 pages',
      'Domain, SSL Certificates and Business E-mail',
      '99.9% Uptime & Maintainance',
      'Secure Hosting Setup',
      'Monthly Analytics Dashboard',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'AI Custom Chatbots',
    plan_descp: 'Tailored Smart AI assistants to boost business impact',
    plan_price: 'Custom Quote',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'AI Chatbot trained on your business data',
      'Multichannel Support (Web/ WhatsApp/ Messenger/ Instagram/ X/ Discord)',
      'Integration with CRM / Website',
      'Monthly Fine-tuning & Updates',
      'Process Automation (sales, marketing, ops)',
      '2x Strategy Calls per month',
    ],
  },
]

const faqList: faq[] = [
  {
    faq_que: 'What services does Unitch Labs  offer?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How long does a typical project take?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How is pricing structured at Unitech Lab?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'Do you offer ongoing support after project completion?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How often will I receive updates on my project?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How often will I receive updates on my project?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'ISO 9001:2015 Certification',
    title:'Internationally recognized Quality Management System (QMS) certification ensuring our commitment to delivering consistent, high-quality services.',
    year: 'Year of Certification: 2025',
    url: '/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Udyam Registration Certificate',
    title: 'Registered under Government of India’s MSME scheme, recognizing us as a certified Micro/Small Enterprise.',
    year: 'Registration Number: UDYAM-KR-03-0567986',
    url: '/',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'GST Registration Certificate',
    title:'Compliant with Indian taxation system under Goods & Services Tax (GST), ensuring transparent and lawful business practices.',
    year: 'GSTIN: 292500210046TRN',
    url: '/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};

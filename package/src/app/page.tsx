import { Metadata } from "next";
import Script from "next/script";
import Achievements from "./components/home/achievements";
import Brand from "./components/home/brand";
import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
import Subscription from "./components/home/subscription";
import WebResult from "./components/home/web-result";

export const metadata: Metadata = {
    title: "Unitech Lab | Innovative Technology Solutions for Your Business",
};


export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Brand logo section Starts-----------------  */}
      <Brand />
      {/* ---------------------Brand logo section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <WebResult />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <Innovation />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      <OnlinePresence />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      <CreativeMind />
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      {/* ---------------------Subscription section Starts-----------------  */}
      <Subscription />
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      <Faq />
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      <Achievements />
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <Solutions />
      {/* ---------------------Solutions section Ends-----------------  */}
      {/* Tawk debug initialization (optional, safe to keep) */}
      <Script id="tawk-init" strategy="afterInteractive">
        {`window.Tawk_API = window.Tawk_API || {};
        window.Tawk_API.onLoad = function () { console.log('[Tawk] loaded'); };
        window.Tawk_API.onError = function (err) { console.warn('[Tawk] error', err); };`}
      </Script>
      <Script id="tawk-chat" strategy="afterInteractive">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/68cea2bbf60acf192897a2d8/1j5jinc72';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();`}
      </Script>
    </main>
  )
}

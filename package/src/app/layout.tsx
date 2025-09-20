'use client'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import ScrollToTop from './components/scroll-to-top'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute='class'
            enableSystem={false}
            defaultTheme='light'>
            {/* ---------------------Header Starts-----------------  */}
            <Header />
            {/* ---------------------Header Ends-------------------  */}
            {children}
            {/* ---------------------Footer Starts-----------------  */}
            <Footer />
            {/* ---------------------Footer Ends-----------------  */}
            <ScrollToTop />
          </ThemeProvider>
        </SessionProvider>
      </body>
      <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/68cea2bbf60acf192897a2d8/1j5jinc72';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
    </html>
  )
}

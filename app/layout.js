import Footer from "@components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import Provider from "@components/Provider";
import Script from "next/script";
export const metadata = {
  title: {
    default: "Kanchana Herath",
    template: `%s | Kanchana Herath`,
  },
  description:
    "Welcome to the creative world of a versatile Graphic Designer & Full Stack Developer! Offering exceptional Graphic Design Services, captivating Web Design Services, and expert-level skills in both fields. Let's bring your vision to life with a perfect blend of artistry and technical prowess. Hire our Graphic Designer & Full Stack Developer for a captivating digital experience!",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "graphic design",
    "graphic designer",
    "full stack development",
    "web design",
    "UI/UX",
    "branding",
    "front-end development",
    "back-end development",
    "responsive design",
    "portfolio",
    "creative solutions",
    "visual identity",
    "user experience",
    "programming",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  metadataBase: new URL("https:kanchanaherath.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="2QWXt-e8NfG4ZVW6O0AMWqtzy4OQeYbztCQ_s5rU400"
        />
        <meta
          name="simpledcver"
          content="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJrYW5jaGFuYWhlcmF0aC5jb20iLCJleHAiOjE2OTIxNDQwMDB9.anr4D90XIeaNcEY64F1_5dIwq8oLqWq3Hfw5VutlODs"
        ></meta>
        <>
          <Script
            async="true"
            src="https://www.googletagmanager.com/gtag/js?id=G-HECTX7X7B9"
          />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-HECTX7X7B9');
        `}
          </Script>
          <Script
            async="true"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7747990776554843"
            crossorigin="anonymous"
          />
        </>
      </head>
      <body className="bg-gray-100 dark:bg-[#0e0e0e] ">
        <Provider>
          <div className="maindiv ">
            <div className="gradientdiv" />
          </div>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

"use client";
import { Poppins } from "next/font/google";
import PageWrapper from "@/components/PageWrapper";
import MainCarosel from "@/components/Carosel";
import AboutMe from "@/components/AboutMe";
import RecentProject from "@/components/RecentProject";
import ServicesOffer from "@/components/ServicesOffer";
import ClientsFeedBack from "@/components/ClientsFeedBack";
import BlogPost from "@/components/BlogPost";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export default function Home() {
  return (
    <PageWrapper>
      <main className={`${poppins.variable} font-poppins`}>
        <div className="">
          <MainCarosel />
          <AboutMe />
          <RecentProject />
          <ServicesOffer />
          <ClientsFeedBack />
          <BlogPost />
        </div>
      </main>
    </PageWrapper>
  );
}

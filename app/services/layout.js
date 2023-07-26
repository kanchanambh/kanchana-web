import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "@app/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title:
    "Transform Your Brand with a Skilled Graphic Designer and Full Stack Developer",
  description:
    "Unlock your digital potential with our expert Graphic Design and Full Stack Development services. Transforming ideas into stunning visuals and seamless web solutions. Discover the perfect blend of creativity and technical expertise today",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "graphic design",
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
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}

import { getPortfolio } from "@app/hooks/gedData";
import PortfoloSingel from "@components/PortfoloSingel";
import { output } from "@next.config";

async function getaData(param) {
  const output = await getPortfolio(param);
  return output;
}

export async function generateMetadata({ params, searchParams }, parent) {
  let data = await getaData(params.slug);

  return {
    title: data.seo_title,
    description: data.meta_description,
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
    alternates: {
      canonical: ` ${process.env.BASE_URL}/portfolios/${data.slug}`,
    },
  };
}

const SingelPortfolioPage = async ({ params }) => {
  let output = await getaData(params.slug);
  return (
    <div className="relative z-10 py-10 flex justify-center items-center">
      <>{output && <PortfoloSingel output={output} />}</>
    </div>
  );
};

export default SingelPortfolioPage;

export const dynamic = "force-dynamic";

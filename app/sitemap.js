export default async function sitemap() {
  const baseUrl = process.env.BASE_URL;

  const Portres = await fetch(process.env.BASE_URL + "/api/portfolios");
  const repoPort = await Portres.json();

  const postsUrls =
    repoPort?.map((post) => {
      return {
        url: `${process.env.BASE_URL}/portfolios/${post.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
  ];
}

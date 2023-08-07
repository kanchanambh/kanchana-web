export default async function sitemap() {
  //ddd
  const Portres = await fetch(process.env.BASE_URL + "/api/portfolios");
  const repoPort = await Portres.json();

  return [
    {
      url: process.env.BASE_URL,
      lastModified: new Date(),
    },
  ];
}

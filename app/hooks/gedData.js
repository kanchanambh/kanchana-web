export async function getPortfolio(slug) {
  const response = await fetch(
    process.env.BASE_URL + "/api/portfolios?slug=" + slug
  );

  const data = await response.json();

  return data;
}

export async function getBlog(slug) {
  const response = await fetch(process.env.BASE_URL + "/api/blog?slug=" + slug);

  const data = await response.json();

  return data;
}

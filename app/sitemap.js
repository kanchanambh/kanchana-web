export default async function sitemap() {
  const baseUrl = process.env.BASE_URL;

  // Get All Posts from CMS

  const Portres = await fetch(process.env.BASE_URL + "/api/portfolios");
  const repoPort = await Portres.json();

  const Catres = await fetch(process.env.BASE_URL + "/api/categories");
  const repoCat = await Catres.json();

  const blogsres = await fetch(process.env.BASE_URL + "/api/blog");
  const blogPost = await blogsres.json();

  const blogscat = await fetch(process.env.BASE_URL + "/api/blogCategories");
  const blogPostcat = await blogscat.json();

  const postsUrls =
    repoPort?.map((post) => {
      return {
        url: `${baseUrl}/portfolios/${post.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  const categoriesUrls =
    repoCat?.map((category) => {
      return {
        url: `${baseUrl}/portfolios/category/${category.name
          .toLowerCase()
          .replace(/\s/g, "-")}`,
        lastModified: new Date(),
      };
    }) ?? [];

  const blogssUrls =
    blogPost?.map((blog) => {
      return {
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  const blogcategoriesUrls =
    blogPostcat?.map((category) => {
      return {
        url: `${baseUrl}/blog/category/${category.category
          .toLowerCase()
          .replace(/\s/g, "-")}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
    ...categoriesUrls,
    ...blogssUrls,
    ...blogcategoriesUrls,
  ];
}

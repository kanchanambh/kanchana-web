export default async function sitemap() {
  const baseUrl = process.env.BASE_URL;

  const Portres = await fetch(process.env.BASE_URL + "/api/portfolios");
  const repoPort = await Portres.json();

  const Catres = await fetch(process.env.BASE_URL + "/api/categories");
  const repoCat = await Catres.json();

  const blogsres = await fetch(process.env.BASE_URL + "/api/blog");
  const blogPost = await blogsres.json();

  const blogscat = await fetch(process.env.BASE_URL + "/api/blogCategories");
  const blogPostcat = await blogscat.json();
  //function
  const postsUrls =
    repoPort?.map((post) => {
      return {
        url: `${process.env.BASE_URL}/portfolios/${post.slug}`,
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
    {
      url: `${baseUrl}/portfolios`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolios/category`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/category`,
      lastModified: new Date(),
    },

    ...postsUrls,
    ...categoriesUrls,
    ...blogssUrls,
    ...blogcategoriesUrls,
  ];
}

import { connectToDB } from "@/lib/database";
import { NextResponse } from "next/server";
import Blog from "@models/Blog";
import BlogCategory from "@models/BlogCategory";

export async function POST(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const {
      title,
      slug,
      featured,
      description,
      bodyimages,
      category,
      seo_title,
      meta_description,
      images,
    } = await req.json();

    const res = await Blog.create({
      title: title,
      slug: slug,
      featured: featured,
      description: description,
      bodyimages: bodyimages || undefined,
      category: category,
      seo_title: seo_title,
      meta_description: meta_description,
      images: images,
    });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function PUT(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const {
      title,
      slug,
      featured,
      description,
      bodyimages,
      id,
      seo_title,
      category,
      meta_description,
      images,
    } = await req.json();
    const res = await Blog.updateOne(
      { _id: id },
      {
        title: title,
        slug: slug,
        featured: featured,
        description: description,
        bodyimages: bodyimages || undefined,
        category: category,
        seo_title: seo_title,
        meta_description: meta_description,
        images: images,
      }
    );
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const id = req.nextUrl.searchParams.get("id");

    const res = await Blog.deleteOne({ _id: id });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectToDB().catch((err) => NextResponse.json(err));
    const id = req.nextUrl.searchParams.get("id");
    const slug = req.nextUrl.searchParams.get("slug");
    const catname = req.nextUrl.searchParams.get("catname");
    const catID = req.nextUrl.searchParams.get("catID");
    const featured = req.nextUrl.searchParams.get("featured");

    if (id) {
      const res = await Blog.findOne({ _id: id });
      return new Response(JSON.stringify(res), { status: 200 });
    }
    if (slug) {
      const res = await Blog.findOne({ slug: slug });

      return new Response(JSON.stringify(res), { status: 200 });
    }
    if (catID) {
      const blogs = await Blog.find({ category: catID }).populate("category");

      return new Response(JSON.stringify(blogs), { status: 200 });
    }
    if (featured) {
      const res = await Blog.find({ featured: featured });

      return new Response(JSON.stringify(res), { status: 200 });
    }
    if (catname) {
      const category = await BlogCategory.findOne({ category: name }).exec();

      if (!category) {
        return new Response(JSON.stringify("NO Found Category"), {
          status: 200,
        });
      }
      const blogs = await Blog.find({ category: category._id }).populate(
        "category"
      );

      return new Response(JSON.stringify(blogs), { status: 200 });
    } else {
      const res = await Blog.find().populate("category");
      return new Response(JSON.stringify(res), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

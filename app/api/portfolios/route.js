import { connectToDB } from "@/lib/database";
import { NextResponse } from "next/server";
import Portfolio from "@models/Portfolio";

export async function POST(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const {
      title,
      slug,
      featured,
      description,
      category,
      seo_title,
      meta_description,
      images,
    } = await req.json();

    const res = await Portfolio.create({
      title: title,
      slug: slug,
      featured: featured,
      description: description,
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
      id,
      seo_title,
      category,
      meta_description,
      images,
    } = await req.json();
    const res = await Portfolio.updateOne(
      { _id: id },
      {
        title: title,
        slug: slug,
        featured: featured,
        description: description,
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

    const res = await Portfolio.deleteOne({ _id: id });
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
    const featured = req.nextUrl.searchParams.get("featured");
    const cat = req.nextUrl.searchParams.get("cat");
    if (id) {
      const res = await Portfolio.findOne({ _id: id });
      return new Response(JSON.stringify(res), { status: 200 });
    }
    if (slug) {
      const res = await Portfolio.findOne({ slug: slug });

      return new Response(JSON.stringify(res), { status: 200 });
    }

    if (featured) {
      const res = await Portfolio.find({ featured: featured });

      return new Response(JSON.stringify(res), { status: 200 });
    } else {
      const res = await Portfolio.find().populate([
        {
          path: "category",
          populate: [{ path: "parent" }],
        },
      ]);

      return new Response(JSON.stringify(res), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

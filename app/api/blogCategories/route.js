import { connectToDB } from "@/lib/database";
import { NextResponse } from "next/server";
import BlogCategory from "@models/BlogCategory";

export async function POST(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const { category, parentCategory } = await req.json();
    const res = await BlogCategory.create({
      category: category,
      parent: parentCategory || undefined,
    });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function GET(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));

    const catname = req.nextUrl.searchParams.get("cat");
    const searchRegex = new RegExp(catname, "i");

    if (catname) {
      const res = await BlogCategory.find({
        category: { $regex: searchRegex },
      });

      return new Response(JSON.stringify(res), { status: 200 });
    } else {
      const res = await BlogCategory.find().populate("parent");
      return new Response(JSON.stringify(res), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));

    const id = req.nextUrl.searchParams.get("id");

    const res = await BlogCategory.deleteOne({ _id: id });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function PUT(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const { category, parentCategory, _id } = await req.json();
    const res = await BlogCategory.updateOne(
      { _id },
      {
        category: category,
        parent: parentCategory || undefined,
      }
    );
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

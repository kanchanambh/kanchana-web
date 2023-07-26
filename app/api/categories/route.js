import { connectToDB } from "@/lib/database";
import { NextResponse } from "next/server";
import Category from "@models/Category";

export async function POST(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const { name, parentCategory } = await req.json();
    const res = await Category.create({
      name: name,
      parent: parentCategory || undefined,
    });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function PUT(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const { name, parentCategory, _id } = await req.json();
    const res = await Category.updateOne(
      { _id },
      {
        name: name,
        parent: parentCategory || undefined,
      }
    );
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

export async function GET(req) {
  try {
    connectToDB().catch((err) => NextResponse.json(err));
    const cat = req.nextUrl.searchParams.get("cat");
    const searchRegex = new RegExp(cat, "i");
    if (cat) {
      const res = await Category.find({
        name: { $regex: searchRegex },
      }).populate("parent");

      return new Response(JSON.stringify(res), { status: 200 });
    } else {
      const res = await Category.find().populate("parent");
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

    const res = await Category.deleteOne({ _id: id });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

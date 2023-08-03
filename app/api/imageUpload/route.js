import { NextResponse } from "next/server";
import {
  PutObjectCommand,
  S3Client,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const files = formData.getAll("files");

    const client = new S3Client({
      region: "eu-north-1",
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      },
    });

    const links = [];

    for (const file of files) {
      // Generate a unique file name or use the original file name
      const filena = file.name.replace(/\s+/g, "_").toLowerCase();
      const ext = filena.split(".");

      const fileName = `${ext[0]}_${new Date()}.${ext[1]}`;

      // Read the file content as an ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      // Create a buffer from the ArrayBuffer
      const buffer = Buffer.from(arrayBuffer);
      const folder = "portfolio";
      try {
        await client.send(
          new PutObjectCommand({
            Bucket: "kanchanaherathweb",
            Key: `${folder}/${fileName}`,
            Body: buffer,
            ACL: "public-read",
          })
        );
        const link = `https://kanchanaherathweb.s3.amazonaws.com/${folder}/${fileName}`;
        links.push(link);
        console.log("Image uploaded successfully!");
        // Return the public URL of the uploaded image
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    }

    return new Response(JSON.stringify(links), { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error." });
  }
}

export async function DELETE(req) {
  const url = req.nextUrl.searchParams.get("id");
  console.log(url);
  const filename = url.substring(url.lastIndexOf("/") + 1);
  console.log(filename);
  const folder = "portfolio";
  try {
    const client = new S3Client({
      region: "eu-north-1",
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      },
    });
    await client.send(
      new DeleteObjectCommand({
        Bucket: "kanchanaherathweb",
        Key: `${folder}/${filename}`,
      })
    );

    console.log(`Deleted file: ${filename}`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting file:", error);
    // return NextResponse.json({ success: false, error: "Error deleting file" });
  }
}

// pages/api/normalizeCategories.js
import { connectToDB } from "@/lib/database";
import Portfolio from "@models/Portfolio";

export async function POST(req) {
  try {
    await connectToDB().catch((err) => NextResponse.json(err));
    const portfolios = await Portfolio.find();
    for (const portfolio of portfolios) {
      // Check if category is not an array
      if (!Array.isArray(portfolio.category)) {
        // Convert single category to an array
        portfolio.category = [portfolio.category]; // Wrap it in an array
        await portfolio.save(); // Save the updated portfolio
      }
    }
    return new Response(JSON.stringify({ message: "Normalization complete" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

import { signJwtToken } from "@/lib/jwt";
import User from "@/models/User";
import { connectToDB } from "@/lib/database";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { email, password } = await req.json();
  await connectToDB();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify("No userrr"), { status: 500 });
  }
  const comparePass = await bcrypt.compare(password, user.password);

  if (!comparePass) {
    return new Response(JSON.stringify("null"), { status: 500 });
  } else {
    const { password, ...currentUser } = user._doc;
    const accessToken = signJwtToken(currentUser, { expiresIn: "6d" });
    const result = {
      ...currentUser,
      accessToken,
    };
    return new Response(JSON.stringify(result), { status: 200 });
  }
}

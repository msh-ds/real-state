import { NextResponse } from "next/server";
import connectDB from "../../../../../../utils/connectDB";
import { getServerSession } from "next-auth";
import User from "@/models/User";
import Profile from "@/models/Profile";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const id = context.params.userId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی محدود" },
        {
          status: 403,
        }
      );
    }

    const profile = await Profile.findById(id);
    profile.published = true;
    profile.save();

    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json(
      { message: "مشکلی در سرور به وجود آمده است" },
      { status: 500 }
    );
  }
}

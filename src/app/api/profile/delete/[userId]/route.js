import { getServerSession } from "next-auth";
import connectDB from "../../../../../../utils/connectDB";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import User from "@/models/User";
import Profile from "@/models/Profile";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const id = params.userId;

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    const profile = await Profile.findById(id);
    if (!profile) {
      return NextResponse.json(
        { error: "آگهی یافت نشد" },
        { status: 404 }
      );
    }

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }

    await Profile.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "آگهی موردنظر حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

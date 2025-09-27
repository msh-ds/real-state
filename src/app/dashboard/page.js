import DashboardPage from "@/components/templates/DashboardPage";
import connectDB from "../../../utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";

async function page() {
  await connectDB();
  const session = await getServerSession(authOptions);
  //   console.log(session)
  const user = await User.findOne({ email: session.user.email });
  // console.log(user)

  return <DashboardPage createdAt={user.createdAt} />;
}

export default page;

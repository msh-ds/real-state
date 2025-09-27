import { getServerSession } from "next-auth";
import connectDB from "../../../utils/connectDB";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import Profile from "@/models/Profile";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import AdminPage from "@/components/templates/AdminPage";

export const metadata = {
  title: "پروژه املاک | توسعه داده شده توسط مسیح درستکار",
};

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });

  return (
    <DashboardSidebar role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSidebar>
  );
};

export default Admin;

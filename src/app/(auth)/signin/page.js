import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignInPage from "@/components/templates/SignInPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignInPage />;
}

export default page;

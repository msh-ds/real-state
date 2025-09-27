import Profile from "@/models/Profile";
import connectDB from "../../../../../utils/connectDB";
import AddProfilePage from "@/components/templates/AddProfilePage";

async function page({ params }) {
  await connectDB();

  const { profileId } = params;

  const profile = await Profile.findById(profileId);

  if (!profile) {
    return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید ...</h3>;
  }
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}

export default page;

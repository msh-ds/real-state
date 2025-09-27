import Profile from "@/models/Profile";
import connectDB from "../../../../utils/connectDB";
import DetailsPage from "@/components/templates/DetailsPage";

async function page({ params }) {
  const { profileId } = await params;
  await connectDB();

  const profile = await Profile.findById(profileId);
  if (!profile) return <h3>مشکلی پیش آمده است</h3>;
  return <DetailsPage data={profile} />;
}

export default page;

export async function generateMetaData({ params }) {
  const { profileId } = await params;
  await connectDB();

  const profile = await Profile.findById(profileId);

   return {
    title: profile.title,
    description: profile.description,
    authors: { name: profile.realState },
    other: { mytag: "test meta tag" },
  };
}

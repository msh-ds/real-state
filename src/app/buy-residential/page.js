import BuyResidentialPage from "@/components/templates/BuyResidentialPage";

export const dynamic = "force-dynamic"; // اضافه شد

async function page({ searchParams }) {
  const params = searchParams;

  // حتما cache: 'no-store' بذاریم تا SSR همیشه جدید بده
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/profile`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (data.error) {
    return <h3>مشکلی پیش آمده است</h3>;
  } 

  let finalData = data.data;

  if (params?.category) {
    finalData = finalData.filter(i => i.category === params.category);
  }

  return <BuyResidentialPage data={finalData} />;
}

export default page;

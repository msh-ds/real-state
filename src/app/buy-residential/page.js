import BuyResidentialPage from "@/components/templates/BuyResidentialPage";

async function page({ searchParams }) {
  const params = searchParams;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/profile`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (data.error) {
    return <h3>مشکلی پیش آمده است</h3>;
  }

  let finalData = data.data;

  if (params?.category) {
    finalData = finalData.filter((i) => i.category === params.category);
  }

  return <BuyResidentialPage data={finalData} />;
}

export default page;

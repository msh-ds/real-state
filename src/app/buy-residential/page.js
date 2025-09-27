import BuyResidentialPage from "@/components/templates/BuyResidentialPage";

async function page({ searchParams }) {
  const params = searchParams;

  const res = await fetch("http://localhost:3001/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if(data.error) {
    return <h3>مشکلی پیش آمده است</h3>
  } 

  let finalData = data.data;

  if(params?.category){
    finalData = finalData.filter(i => i.category === params.category)
  }
  // console.log("🚀 finalData:", finalData);

  return <BuyResidentialPage data={finalData}/>;
}

export default page;

export default async function Product55Card({ params, searchParams }) {
  const { id } = await params;
  // const searchParams = await searchParams;

  console.log("params", id);
  // console.log("searchParams", searchParams);

  // fetch(`https://dummyjson.com/products/${id}`);
  const product = await fetch("https://dummyjson.com/products/" + id)
    .then((res) => res.json())
    .then((data) => data);

  console.log(product);

  const { thumbnail, title, price } = product;

  return (
    <div className="h-screen flex">
      <div>
        <img src={thumbnail} alt="" />
      </div>

      <div>
        <h2 className="text-3xl">{title}</h2>
      </div>
    </div>
  );
}

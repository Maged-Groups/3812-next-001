export default async function SearchKeywordPage({ params }) {
  const { keyword } = await params;

  return <div>Search for {keyword}</div>;
}

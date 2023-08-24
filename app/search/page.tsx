import HomeResults from "@/components/Results";
import { NEXT_PUBLIC_NEWS_API_KEY } from "@/lib/utils";
// import { useSearchParams } from "next/navigation";



export default async function SearchPage( { searchParams } : { searchParams : { query : string}}) {
  // const searchParams = useSearchParams();
  const query = searchParams.query || "india";
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${NEXT_PUBLIC_NEWS_API_KEY}`);

  // if (!res.ok) {
  //   throw new Error("Error fetching data");
  // }

  const data = await res.json();

  const results = data.articles;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <HomeResults results={results} />}
    </div>
  );
}

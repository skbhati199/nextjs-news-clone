import HomeResults from "@/components/Results";
import { NEWS_API_KEY } from "@/lib/utils";


export const dynamic = 'force-static'


export default async function Home({
  searchParams,
}: {
  searchParams?: any;
}) {
  const type = searchParams?.type || "top-headlines";

  const url =  type === "top-headlines" 
  ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}` 
  : `https://newsapi.org/v2/everything?q=india&apiKey=${NEWS_API_KEY}`

  const res = await fetch(url,
    { next: { revalidate: 100000 } }
  );

  // console.log(res.url)

  // if (!res.ok) {
  //   throw new Error("Failed to data fetching");
  // }

  const data = await res.json();

  const results = data.articles;

  // console.log(results);

  return (
    <div>
      {results ? (
        <HomeResults results={results} />
      ) : (
        <div>No News available</div>
      )}
    </div>
  );
}

import HomeResults from "@/components/Results";


export const dynamic = 'force-static'

const NEWS_API_KEY = process.env.NEWS_API_KEY;

export default async function Home({
  searchParams,
}: {
  searchParams?: { type?: string };
}) {
  const type = searchParams?.type || "top-headlines";

  const res = await fetch(`https://newsapi.org/v2/${type}?country=us&apiKey=${NEWS_API_KEY}`,
    { next: { revalidate: 1000 } }
  );

  // if (!res.ok) {
  //   throw new Error("Failed to data fetching");
  // }

  const data = await res.json();

  const results = data.articles;

  console.log(results);

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

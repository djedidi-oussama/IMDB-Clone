import Results from "@/components/Results";
import TryAgainButton from "@/components/TryAgainButton";

const API_KEY = process.env.TMDB_API_KEY;

async function page({ searchParams }) {
  const genre = (await searchParams).genre || "fetchTrending";

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${
        genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

    return (
      <div className="mt-10 text-center">
        <h1>Something went wrong, please try again.</h1>
        <TryAgainButton />
      </div>
    );
  }
}

export default page;

import Results from "@/components/Results";

const API_KEY = process.env.TMDB_API_KEY;
async function page({ searchParams }) {
  const params = await searchParams;
  const genre = params.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3/${
    genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
  }?api_key=${API_KEY}&language=en-US&page=1
  }`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  const results = data.results;
  return <div>
    <Results results={results} />
  </div>;
}

export default page;
